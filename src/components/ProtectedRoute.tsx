'use client';

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navigation from './Navigation';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('admin' | 'employee' | 'consignor')[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
    
    if (!isLoading && user && allowedRoles && !allowedRoles.includes(user.role)) {
      // Redirect to dashboard if user doesn't have permission for this route
      router.push('/dashboard');
    }
  }, [user, isLoading, router, allowedRoles]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return null; // Will redirect to dashboard
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}