'use client';
import { useSession } from 'next-auth/react';
import Navbar from './navbar';

export default function Nav() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return <Navbar user={session?.user} />;
}
