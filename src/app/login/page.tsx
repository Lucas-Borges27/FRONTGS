'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();
  const { setUser } = useAuth();

  const handleLogin = async () => {
    if (!email || !senha) {
      alert('Preencha os campos com email e senha.');
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, senha }),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('nomeLogado', data.nome);
        setUser({ nome: data.nome });
        alert('Login feito com sucesso !');
        router.push('/');
      } else {
        alert(data.detail || 'Email ou senha incorretos.'); 
      }
    } catch {
      alert('Erro na requisição, tente novamente.'); 
    }
  };

  return (
    <div className="min-h-screen bg-[#081c2c] flex items-center justify-center text-white">
      <div className="bg-gray-800 p-6 rounded shadow-md max-w-sm w-full">
        <h2 className="text-2xl mb-4 font-bold text-green-400 text-center">Login</h2>
        <input
          type="email"
          placeholder="Digite seu email"
          className="w-full p-2  rounded-md mb-4 text-white placeholder-gray-500 border-1 border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 rounded-md mb-4 text-white placeholder-gray-500 border-1 border-gray-300"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full"
        >
          Entrar
        </button>
        <p className="mt-4 text-center">
          Não tem cadastro?{' '}
          <a href="/cadastro" className="text-green-400 hover:underline font-semibold">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
