'use client';

import Script from 'next/script';
import { useState } from 'react';

declare global {
  interface Window {
    ODSTracker: {
      init: (customerId?: string) => void;
      trackEvent: (eventType: string, details?: Record<string, any>) => void;
    };
  }
}

export default function TrackerInitializer() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const handleScriptLoad = () => {
    setIsScriptLoaded(true);
    if (window.ODSTracker) {
      window.ODSTracker.init();
    }
  };

  return (
    <Script 
      src="/ods-analytics.js" 
      strategy="afterInteractive"
      onLoad={handleScriptLoad}
    />
  );
} 