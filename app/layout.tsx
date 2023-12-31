import './globals.css';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
    title: 'RedLub Dashboard',
    description: 'used oil collection management dashboard'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full bg-gray-50">
            <body className="h-full">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
