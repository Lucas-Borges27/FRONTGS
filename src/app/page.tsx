'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from './context/AuthContext';
import CardsSelecao from "./components/cards";
import Footer from './components/footer';

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  const handlePainelUsuarioClick = () => {
    if (user) {
      router.push('/painelUsuario');
    } else {
      router.push('/login');
    }
  };

  return (
    <main>
      <section
        className="flex flex-row flex-nowrap flex-grow box-border justify-between px-[15%]"
        style={{ padding: '0 15%' }}>
        <div className="max-w-xl text-center md:text-left mt-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 mt-4">ALERTA360</h2>
          <p className="text-lg md:text-xl mb-2 drop-shadow-lg">Inteligência que protege vidas</p>
          <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
            Busque informações sobre os registros de desastres ocorridos no território nacional com o Alerta360
          </p>

          <div className="space-x-10 flex flex-col md:flex-row items-center justify-center md:justify-start">
            <button
              onClick={handlePainelUsuarioClick}
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 px-6 rounded transition-all duration-300"
            >
              Acesse o seu painel
            </button>

            <button 
              onClick={() => router.push('/painel')}
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 px-6 rounded transition-all duration-300"
            >
              Acesse o painel geral
            </button>
          </div>
        </div>
        

        <div className="mb-12 md:mb-0 md:ml-12 relative w-full max-w-md flex items-center justify-center">
          <Image
            src="/images/fundopagedas.svg"
            alt="Imagem da página"
            className="w-full h-auto object-contain drop-shadow-lg rounded-2xl"
            width={400}
            height={300}
          />
        </div>
      </section>
      <div className="flex flex-row justify-center">
        <CardsSelecao/>
      </div>
      <Footer />

    </main>
  );
}
