import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { isTokenExpired } from '@/utils/token';
import toast from 'react-hot-toast';
import { getUserLoginRoutePath } from '@/routes/routes';
import { useRouter } from 'nextjs-toploader/app';

export function useTokenExpiryCheck(interval = 30 * 1000) { // 30 sec
    const router = useRouter();

    useEffect(() => {
        const checkToken = () => {
            const token = Cookies.get('authToken');
            console.log('token', token);

            // Only run logout if token exists and is expired
            if (token && isTokenExpired(token)) {
                Cookies.remove('authToken');
                toast.error("You've been logged out");
                router.push(getUserLoginRoutePath());
            }
        };

        checkToken(); // check immediately
        const timer = setInterval(checkToken, interval);

        return () => clearInterval(timer);
    }, [router, interval]);
}
