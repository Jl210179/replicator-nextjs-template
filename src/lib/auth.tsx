'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User, UserRole } from '@/types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  switchRole: (role: UserRole) => void; // For demo purposes
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock authentication - in a real app, this would call an API
    const mockUsers: Record<string, User> = {
      'admin@store.com': {
        id: '1',
        email: 'admin@store.com',
        name: 'Store Administrator',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      'employee@store.com': {
        id: '2',
        email: 'employee@store.com',
        name: 'Store Employee',
        role: 'employee',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      'consignor@example.com': {
        id: '3',
        email: 'consignor@example.com',
        name: 'John Consignor',
        role: 'consignor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    const foundUser = mockUsers[email];
    if (foundUser && password === 'password') {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const switchRole = (role: UserRole) => {
    if (user) {
      const updatedUser = { ...user, role };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}