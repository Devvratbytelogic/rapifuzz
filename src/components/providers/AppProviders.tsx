'use client'

import { useIdleLogout } from '@/hooks/useIdleLogout';
import { useTokenExpiryCheck } from '@/hooks/useTokenExpiryCheck';
import { HeroUIProvider } from '@heroui/react';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

interface ProvidersProps {
    children: React.ReactNode;
}

export function AppProviders({ children }: ProvidersProps) {
    useIdleLogout();
    useTokenExpiryCheck();
    return (
        <>
            <HeroUIProvider>
                <NextTopLoader
                    color="#f7941d"
                // showSpinner={false}
                />
                {children}
            </HeroUIProvider>
        </>
    );
}