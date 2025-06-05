'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  user: { nome: string } | null;
  setUser: (user: { nome: string } | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ nome: string } | null>(null);

  useEffect(() => {
    // On mount, try to load user from localStorage
    const storedUser = localStorage.getItem('nomeLogado');
    if (storedUser) {
      setUser({ nome: storedUser });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
