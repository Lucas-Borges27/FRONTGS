// ProjetoFIAP.jsx
export default function pageOquee() {
    return (
      <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Título principal */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-red-600">Alerta360</h1>
            <p className="text-gray-600 text-xl mt-2">
              Sistema Inteligente de Monitoramento e Apoio em Desastres Naturais
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Desenvolvido por alunos da FIAP como solução para o Desafio GS
            </p>
          </div>
  
          {/* Seção "O que é?" */}
          <div className="bg-white shadow-lg rounded-2xl p-8 space-y-4">
            <h2 className="text-3xl font-semibold text-red-500">O que é?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              O <span className="font-semibold text-red-500">Alerta360</span> é um sistema inteligente criado para monitorar e ajudar na prevenção de desastres naturais no Brasil. Ele reúne <strong>dados oficiais</strong>, integra <strong>órgãos parceiros</strong> e oferece uma <strong>visão clara das áreas de risco</strong>, facilitando decisões rápidas para proteger a população.
            </p>
            <p className="text-gray-700 text-base italic">
              Essa solução está sendo desenvolvida pelos próprios integrantes do nosso grupo como parte do Desafio GS da FIAP.
            </p>
          </div>
  
          {/* Seção "Sobre o Projeto" */}
          <div className="bg-white shadow-lg rounded-2xl p-8 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800">Sobre o Projeto</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              O <strong>Alerta360</strong> é um projeto desenvolvido pelos alunos da <strong>FIAP</strong> como parte do <strong>Desafio Global Solution 2025</strong>. A solução foi inspirada em iniciativas reais como o Atlas Brasileiro de Desastres Naturais e dados oficiais da <strong>Defesa Civil</strong>, mas totalmente criada e programada pela equipe, com foco em acessibilidade, prevenção e ação rápida frente a eventos extremos no Brasil.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              A proposta é reunir informações atualizadas sobre áreas de risco e desastres passados, permitindo análises inteligentes, visualizações geográficas e decisões estratégicas baseadas em dados. A versão digital permite consultas personalizadas por estado, tipo de desastre e período, ajudando na tomada de decisão de prefeituras, escolas, ONGs e órgãos públicos.
            </p>
            <p className="text-gray-700 text-base italic">
              O sistema foi projetado, desenhado e implementado 100% por Yasmin Silva, Lucas Borges, Pedro Silva e é uma prova de conceito com potencial para crescer e se integrar a APIs reais no futuro.
            </p>
          </div>
  
          {/* Assinatura do grupo */}
          <div className="text-center pt-6 border-t border-gray-300">
            <p className="text-gray-500 text-sm">
              Projeto desenvolvido por Yasmin Silva, Lucas Borges, Pedro Silva – GS 2025
            </p>
          </div>
        </div>
      </section>
    );
  }
  