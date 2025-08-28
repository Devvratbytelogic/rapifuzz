/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from 'jwt-decode';

export function isTokenExpired(token: string): boolean {
    try {
        const decoded: any = jwtDecode(token);
        const now = Date.now() / 1000; // current time in seconds
        return decoded.exp < now;
    } catch (error) {
        console.error('Invalid token', error);
        return true;
    }
}
