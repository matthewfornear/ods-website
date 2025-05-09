'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    const fullPath = pathname + (searchParams ? '?' + searchParams.toString() : '');
    if (prevPath.current !== fullPath && typeof window !== 'undefined' && window.ODSTracker) {
      window.ODSTracker.trackEvent('pageview');
      prevPath.current = fullPath;
    }
  }, [pathname, searchParams]);

  return null;
} 