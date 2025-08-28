// 'use client';

// import { useEffect } from 'react';
// import { usePathname } from 'next/navigation';

// export default function ScrollToTop() {
//   const pathname = usePathname();

//   useEffect(() => {
//     window.scrollTo(0, 0);
    
//   }, [pathname]);

//   return null;
// }

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      // Disable Next.js automatic scroll restoration
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}
