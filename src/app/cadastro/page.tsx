'use client';''

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CadastroPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [orgao, setOrgao] = useState('');
  const router = useRouter();

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !confirmaSenha || !cargo || !orgao) {
      alert('Preencha todos os campos necessários !');
      return;
    }
    if (senha !== confirmaSenha) {
      alert('As senhas não são iguais!');
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha, cargo, orgao }),
      });
      const data = await res.json();

      if (res.ok) {
        alert('Cadastro realizado! Bem-vindo!');
        router.push('/login');
      } else {
        alert(data.detail || 'Erro ao realizar cadastro.'); 
      }
    } catch {
      alert('Erro na requisição, tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center text-white px-4">
      <div className="bg-gray-900 bg-opacity-90 p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-green-400 text-center tracking-wide">Cadastro</h2>

        <input
          type="text"
          placeholder="Nome"
          className="w-full p-3 rounded-md mb-4 text-white placeholder-gray-500 border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-0"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md mb-4 text-white placeholder-gray-500 border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 rounded-md mb-4 text-white placeholder-gray-500 border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-0"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirme a senha"
          className="w-full p-3 rounded-md mb-4 text-white placeholder-gray-500 border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-0"
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cargo"
          className="w-full p-3 rounded-md mb-4 text-white placeholder-gray-500 border-1 border-gray-300  focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-0"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Órgão"
          className="w-full p-3 rounded-md mb-4 text-white placeholder-gray-500 border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-0"
          value={orgao}
          onChange={(e) => setOrgao(e.target.value)}
        />

        <button
          onClick={handleCadastro}
          className="w-full bg-green-500 hover:bg-green-600 transition-colors py-3 rounded-md font-semibold text-lg shadow-lg"
        >
          Cadastrar
        </button>

        <p className="mt-6 text-center text-gray-300">
          Já tem conta?{' '}
          <a href="/login" className="text-green-400 hover:underline font-semibold">
            Fazer login
          </a>
        </p>
      </div>
    </div>
  );
}
