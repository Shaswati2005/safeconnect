'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log(`User visited: ${url}`);
      
      // Optionally, send the tracked data to your API for storage
      fetch('/api/trackVisit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, timestamp: new Date() }),
      });
    };

    // Initial load
    handleRouteChange(window.location.href);

    // Listen to route changes within the app
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup when the component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
};

export default usePageTracking;
