import React from "react";
import { FileText, Globe, Lock, User, CreditCard } from "lucide-react";

const etapas = [
  {
    icone: <User className="w-8 h-8 text-blue-600" />,
    titulo: "Painel de Ocorrências",
    descricao:
      "Usuários e agentes cadastrados podem registrar ocorrências, garantindo dados confiáveis e atualizados no sistema.",
  },
  {
    icone: <Globe className="w-8 h-8 text-green-600" />,
    titulo: "Painel Geral",
    descricao:
      "Área pública para visualização das ocorrências, sem necessidade de login, mostrando o panorama geral para todo mundo.",
  },
  {
    icone: <Lock className="w-8 h-8 text-purple-600" />,
    titulo: "Painel com Login",
    descricao:
      "Espaço exclusivo para usuários autenticados com acesso a funcionalidades avançadas e controle total do sistema.",
  },
  {
    icone: <CreditCard className="w-8 h-8 text-red-600" />,
    titulo: "Header",
    descricao:
      "Contém os links de Login e acesso ao dashboard interativo criado no Power BI, facilitando a navegação pelo sistema.",
  },
  {
    icone: <FileText className="w-8 h-8 text-yellow-600" />,
    titulo: "Cards",
    descricao:
      "Exibem oque é o Alerta360 e como ele funciona, como funciona o painel geral e o painel com login, e para quem é o Alerta360.",
  },
];

export default function ComoFunciona() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">🧩 Como Funciona</h2>
      <div className="flex flex-col gap-6">
        {etapas.map((etapa, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 flex items-start gap-4"
          >
            {etapa.icone}
            <div>
              <h3 className="text-xl text-gray-900 font-semibold mb-2">{etapa.titulo}</h3>
              <p className="text-gray-700">{etapa.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
