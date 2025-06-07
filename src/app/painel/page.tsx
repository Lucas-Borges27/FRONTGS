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

  useEffect(() => {
    fetchOcorrencias();
  }, []);

  const fetchOcorrencias = async () => {
    try {
      const response = await fetch('https://global-solution.onrender.com/ocorrencias/todas', {
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

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white mt-10">
      <h2 className="text-3xl font-extrabold mt-10 mb-5 text-yellow-400 drop-shadow-lg">Lista de Ocorrências</h2>

      <div className="overflow-x-auto rounded-lg border border-gray-700 shadow-lg">
        <table className="min-w-full table-auto border-collapse text-gray-200">
          <thead className="bg-gray-800 sticky top-0">
            <tr>
              {['Tipo', 'Descrição', 'Localização', 'Status', 'Data'].map((head) => (
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
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaOcorrencias;

