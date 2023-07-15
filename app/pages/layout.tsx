'use client';
import '../globals.css';
import Nav from './nav';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import { Analytics } from '@vercel/analytics/react';

const metadata = {
  title: 'RedLub Dashboard',
  description: 'Used oil collection management dashboard'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const auth = Cookies.get('auth');
    if (auth !== 'true') {
      router.push('/');
    }
  }, [router]);

  return (
    <main>
      <SessionProvider session={null}>
        <Nav />
      </SessionProvider>
      {children}
      <Analytics />
    </main>
  );
}
