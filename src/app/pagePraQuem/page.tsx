import React from "react";
import { ShieldCheck, AlertCircle, Users, Globe } from "lucide-react";

const publicos = [
  {
    icone: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    titulo: "Defesa Civil",
    descricao:
      "Utiliza o sistema para registrar e acompanhar ocorrências em tempo real, agilizando a resposta a desastres.",
  },
  {
    icone: <AlertCircle className="w-8 h-8 text-red-600" />,
    titulo: "Agentes de Campo",
    descricao:
      "Cadastram ocorrências diretamente do local dos desastres, garantindo informações precisas e imediatas.",
  },
  {
    icone: <Users className="w-8 h-8 text-green-600" />,
    titulo: "Órgãos Públicos",
    descricao:
      "Usam os dados para tomar decisões estratégicas e implementar ações preventivas e emergenciais.",
  },
  {
    icone: <Globe className="w-8 h-8 text-purple-600" />,
    titulo: "Cidadãos",
    descricao:
      "Podem visualizar o painel geral para acompanhar as ocorrências na região e se manterem informados.",
  },
];

export default function PraQuemE() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">🎯 Pra Quem É?</h2>
      <div className="flex flex-col gap-6">
        {publicos.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 flex items-start gap-4"
          >
            {item.icone}
            <div>
              <h3 className="text-xl text-gray-700 font-semibold mb-2">{item.titulo}</h3>
              <p className="text-gray-700">{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
