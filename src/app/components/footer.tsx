export default function Footer() {
    return (
      <footer className="bg-[#081c2c] p-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-2">Quem desenvolveu?</h2>
          <p className="text-white text-sm mb-6">
            O sistema foi desenvolvido por Yasmin Silva, Lucas Borges, Pedro Silva como parte do desafio Global Solution da FIAP, com foco na criação de
            soluções tecnológicas inovadoras voltadas à prevenção e apoio em situações de desastres naturais. O projeto foi
            idealizado, planejado e implementado de forma colaborativa, unindo conhecimentos em engenharia de software, banco de
            dados e inteligência artificial para atender demandas reais de monitoramento e defesa civil.
          </p>
  
          <div className="flex justify-center">
            <div className="flex bg-white flex-wrap justify-center items-center gap-6 max-w-[700px] p-4 rounded-lg shadow-md">
              <img src="/images/ibm_logo.png" alt="IBM" className="h-10 object-contain" />
              <img src="/images/medicos-sem-fronteiraslogo.png" alt="medicos-sem-fronteiras" className="h-10 object-contain" />
              <img src="/images/inpelogo.png" alt="inpe" className="h-10 object-contain" />
              <img src="/images/defesa-civillogo.png" alt="defesa-civil" className="h-10 object-contain" />
              <img src="/images/bombeiroslogo.png" alt="bombeiros" className="h-10 object-contain" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  