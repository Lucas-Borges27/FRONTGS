'use client';
import React, { useState, useEffect } from 'react';

interface Ocorrencia {
  id: number;
  tipo: string;
  descricao: string;
  localizacao: string;
  status: string;
  data: string;
}

const TabelaOcorrencias = () => {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [novaOcorrencia, setNovaOcorrencia] = useState<Partial<Ocorrencia>>({});
  const [editandoId, setEditandoId] = useState<number | null>(null);

  useEffect(() => {
    fetchOcorrencias();
  }, []);

  const fetchOcorrencias = async () => {
    try {
      const response = await fetch('http://localhost:8080/ocorrencias', {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        interface ApiOcorrencia {
          id: number;
          tipoOcorrencia: string;
          descricao: string;
          localizacao: string;
          status: string;
          dataOcorrencia: string | null;
        }
        const mappedData = (data as ApiOcorrencia[]).map((item) => ({
          id: item.id,
          tipo: item.tipoOcorrencia,
          descricao: item.descricao,
          localizacao: item.localizacao,
          status: item.status,
          data: item.dataOcorrencia ? item.dataOcorrencia.split('T')[0] : '',
        }));
        setOcorrencias(mappedData);
      } else {
        alert('Erro ao carregar ocorrências.'); 
      }
    } catch {
      alert('Erro na comunicação com o servidor.');  
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNovaOcorrencia({ ...novaOcorrencia, [e.target.name]: e.target.value });
  };

  const adicionarOcorrencia = async () => {
    if (
      novaOcorrencia.tipo &&
      novaOcorrencia.descricao &&
      novaOcorrencia.localizacao &&
      novaOcorrencia.status &&
      novaOcorrencia.data
    ) {
      try {
        const response = await fetch('http://localhost:8080/ocorrencias', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            tipoOcorrencia: novaOcorrencia.tipo,
            descricao: novaOcorrencia.descricao,
            localizacao: novaOcorrencia.localizacao,
            status: novaOcorrencia.status,
            dataOcorrencia: novaOcorrencia.data,
          }),
        });
        if (response.ok) {
          const nova = await response.json();
          const mappedNova = {
            id: nova.id,
            tipo: nova.tipoOcorrencia,
            descricao: nova.descricao,
            localizacao: nova.localizacao,
            status: nova.status,
            data: nova.dataOcorrencia ? nova.dataOcorrencia.split('T')[0] : '',
            nomeUsuario: nova.nomeUsuario,
          };
          setOcorrencias([...ocorrencias, mappedNova]);
          setNovaOcorrencia({});
        } else if (response.status === 401) {
          alert('Usuário não autenticado.'); 
        } else if (response.status === 400) {
          alert('Dados inválidos para a ocorrência.'); 
        } else {
          alert('Erro ao adicionar ocorrência.'); 
        }
      } catch {
        alert('Erro na comunicação com o servidor.'); 
      }
    }
  };

  const deletar = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/ocorrencias/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      console.log('Delete response status:', response.status);
      const responseBody = await response.text();
      console.log('Delete response body:', responseBody);
      if (response.status === 204) {
        setOcorrencias(ocorrencias.filter((o) => o.id !== id));
      } else if (response.status === 404) {
        alert('Ocorrência não encontrada.'); 
      } else {
        alert('Erro ao deletar ocorrência.'); 
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Erro na comunicação com o servidor.'); 
    }
  };

  const salvarEdicao = async () => {
    if (editandoId !== null) {
      try {
        const response = await fetch(`http://localhost:8080/ocorrencias/${editandoId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            tipoOcorrencia: novaOcorrencia.tipo,
            descricao: novaOcorrencia.descricao,
            localizacao: novaOcorrencia.localizacao,
            status: novaOcorrencia.status,
            dataOcorrencia: novaOcorrencia.data,
          }),
        });
        console.log('Update response status:', response.status);
        const responseBody = await response.text();
        console.log('Update response body:', responseBody);
        if (response.ok) {
          const updated = JSON.parse(responseBody);
          setOcorrencias(
            ocorrencias.map((o) =>
              o.id === editandoId
                ? {
                    id: updated.id,
                    tipo: updated.tipoOcorrencia,
                    descricao: updated.descricao,
                    localizacao: updated.localizacao,
                    status: updated.status,
                    data: updated.dataOcorrencia ? (() => {
                      const d = new Date(updated.dataOcorrencia);
                      const day = String(d.getDate()).padStart(2, '0');
                      const month = String(d.getMonth() + 1).padStart(2, '0');
                      const year = d.getFullYear();
                      return `${day}_${month}_${year}`;
                    })() : '',
                    nomeUsuario: updated.nomeUsuario,
                  }
                : o
            )
          );
          setEditandoId(null);
          setNovaOcorrencia({});
        } else {
          alert('Erro ao atualizar ocorrência.'); 
        }
      } catch (error) {
        console.error('Update error:', error);
        alert('Erro na comunicação com o servidor.'); 
      }
    }
  };

  const iniciarEdicao = (ocorrencia: Ocorrencia) => {
    setNovaOcorrencia(ocorrencia);
    setEditandoId(ocorrencia.id);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white mt-10">
      <h2 className="text-3xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg">Nova Ocorrência</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
        {['tipo', 'descricao', 'localizacao', 'status', 'data'].map((campo) => (
          <input
            key={campo}
            name={campo}
            placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={novaOcorrencia[campo as keyof Ocorrencia] || ''}
            onChange={handleChange}
            type={campo === 'data' ? 'date' : 'text'}
          />
        ))}
      </div>

      <div>
        {editandoId ? (
          <button
            onClick={salvarEdicao}
            className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-md font-semibold shadow-md"
          >
            Salvar Edição
          </button>
        ) : (
          <button
            onClick={adicionarOcorrencia}
            className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-md font-semibold shadow-md"
          >
            Adicionar Ocorrência
          </button>
        )}
      </div>

      <h2 className="text-3xl font-extrabold mt-10 mb-5 text-yellow-400 drop-shadow-lg">Lista de Ocorrências</h2>

      <div className="overflow-x-auto rounded-lg border border-gray-700 shadow-lg">
        <table className="min-w-full table-auto border-collapse text-gray-200">
          <thead className="bg-gray-800 sticky top-0">
            <tr>
              {['Tipo', 'Descrição', 'Localização', 'Status', 'Data', 'Ações'].map((head) => (
                <th
                  key={head}
                  className="border-b border-gray-700 px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ocorrencias.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-500 italic">
                  Nenhuma ocorrência cadastrada
                </td>
              </tr>
            )}
            {ocorrencias.map((o, i) => (
              <tr
                key={o.id}
                className={i % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}
              >
                <td className="border-b border-gray-600 px-6 py-3">{o.tipo}</td>
                <td className="border-b border-gray-600 px-6 py-3">{o.descricao}</td>
                <td className="border-b border-gray-600 px-6 py-3">{o.localizacao}</td>
                <td className="border-b border-gray-600 px-6 py-3">{o.status}</td>
                <td className="border-b border-gray-600 px-6 py-3">{o.data}</td>
                <td className="border-b border-gray-600 px-6 py-3 flex gap-3">
                  <button
                    onClick={() => iniciarEdicao(o)}
                    className="text-yellow-400 hover:text-yellow-300 font-semibold transition"
                    aria-label="Editar ocorrência"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deletar(o.id)}
                    className="text-red-500 hover:text-red-400 font-semibold transition"
                    aria-label="Excluir ocorrência"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaOcorrencias;
