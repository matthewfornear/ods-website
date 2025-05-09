(function() {
    // Configuration
    const config = {
        apiEndpoint: '/api/analytic',
        customerId: 'nocustomer' // Default to 'nocustomer' if not set
    };

    // Parse UTM parameters from URL
    function getUtmParams() {
        const params = {};
        const searchParams = new URLSearchParams(window.location.search);
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(key => {
            const value = searchParams.get(key);
            if (value) params[key] = value;
        });
        return params;
    }

    // Store UTM params in sessionStorage on first page load
    function storeInitialUtmParams() {
        if (!sessionStorage.getItem('ods_utm_params')) {
            const utmParams = getUtmParams();
            if (Object.keys(utmParams).length > 0) {
                sessionStorage.setItem('ods_utm_params', JSON.stringify(utmParams));
            }
        }
    }

    // Retrieve stored UTM params
    function getStoredUtmParams() {
        const utm = sessionStorage.getItem('ods_utm_params');
        return utm ? JSON.parse(utm) : {};
    }

    // Initialize tracking
    function init(customerId) {
        if (customerId) {
            config.customerId = customerId;
        } else {
            config.customerId = 'nocustomer';
        }
        storeInitialUtmParams();
        trackPageView();
    }

    // Track page view
    function trackPageView() {
        const data = {
            type: 'pageview',
            url: window.location.href,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            ...getStoredUtmParams()
        };
        sendData(data);
    }

    // Track custom event
    function trackEvent(eventType, details = {}) {
        const data = {
            type: eventType,
            url: window.location.href,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            ...getStoredUtmParams(),
            ...details
        };
        sendData(data);
    }

    // Send data to API
    function sendData(data) {
        const payload = {
            ...data,
            customerId: config.customerId || 'nocustomer',
            sessionId: getSessionId()
        };

        // Use sendBeacon for better reliability
        if (navigator.sendBeacon) {
            navigator.sendBeacon(config.apiEndpoint, JSON.stringify(payload));
        } else {
            // Fallback to fetch
            fetch(config.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                keepalive: true
            }).catch(console.error);
        }
    }

    // Generate or retrieve session ID
    function getSessionId() {
        let sessionId = sessionStorage.getItem('ods_session_id');
        if (!sessionId) {
            sessionId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            sessionStorage.setItem('ods_session_id', sessionId);
        }
        return sessionId;
    }

    // Expose the tracker to window
    window.ODSTracker = {
        init: init,
        trackEvent: trackEvent
    };
})(); 