'use client';

import './globals.css';
import Header from './components/header';
import { AuthProvider, useAuth } from './context/AuthContext';

function RootContent({ children }: { children: React.ReactNode }) {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8080/usuarios/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        localStorage.removeItem('logado');
        localStorage.removeItem('nomeLogado');
        localStorage.removeItem('email');
        localStorage.removeItem('senha');
        localStorage.removeItem('nome');
        setUser(null);
        } else {
          alert('Erro ao fazer logout.');
        }
      } catch {
        alert('Erro na requisição de logout.');
      }
  };

  return (
    <>
      <Header userName={user ? user.nome : ''} onLogout={handleLogout} />
      <div>{children}</div>
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-[#081c2c] text-white font-sans">
        <AuthProvider>
          <RootContent>{children}</RootContent>
        </AuthProvider>
      </body>
    </html>
  );
}
