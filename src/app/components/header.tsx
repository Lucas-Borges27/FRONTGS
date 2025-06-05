'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  userName: string | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, onLogout }) => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <div>
        <h1 className="text-2xl font-bold">
          <Link href="/">Alerta360</Link>
        </h1>
        {userName && <p className="mt-1 text-lg">Olá, {userName}</p>}
      </div>

      <div className="flex items-center space-x-6">
          <Link 
            href="/dashboard"
            className="relative text-blue-400 font-medium after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Ver Dashboard
          </Link>

          {!userName ? (
            <span
              onClick={handleLogin}
              className="relative cursor-pointer text-green-400 font-medium after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if(e.key === 'Enter') handleLogin() }}
            >
              Login
            </span>
          ) : (
            <span
              onClick={onLogout}
              className="cursor-pointer text-red-600 hover:text-orange-400 font-medium"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if(e.key === 'Enter') onLogout() }}
            >
              Sair
            </span>
          )}
        </div>
    </header>
  );
};

export default Header;
