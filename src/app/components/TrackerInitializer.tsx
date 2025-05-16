'use client';

declare global {
  interface Window {
    ODSTracker: {
      init: (customerId?: string) => void;
      trackEvent: (eventType: string, details?: Record<string, any>) => void;
    };
  }
}

export default function TrackerInitializer() {
  return null;
} 