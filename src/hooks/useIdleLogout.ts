'use client';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { getUserLoginRoutePath } from '@/routes/routes';
import { useRouter } from 'nextjs-toploader/app'

export function useIdleLogout(timeout = 2 * 60 * 1000) { // 2 minutes
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        // Clear auth cookie
        Cookies.remove('authToken');
        toast.error("You've been logged out due to inactivity.");
        router.push(getUserLoginRoutePath());
      }, timeout);
    };
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];
    events.forEach((e) => window.addEventListener(e, resetTimer));
    
    // resetTimer is the function that gets called every time the user does that action.
    // Initialize timer
    resetTimer();

    return () => {
      if (timer) clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, [router, timeout]);
}
