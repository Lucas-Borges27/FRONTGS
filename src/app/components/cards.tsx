'use client'

import { useRouter } from 'next/navigation';

const cards = [
  {
    id: 'oque',
    title: 'O que é?',
    icon: '/images/oque-e.svg',
    link: '/pageOquee',
  },
  {
    id: 'como-funciona',
    title: 'Como funciona?',
    icon: '/images/como-funciona.svg',
    link: '/pageComoFunciona',
  },
  {
    id: 'para-quem',
    title: 'Para quem?',
    icon: '/images/para-quem.svg',
    link: '/pagePraQuem',
  },
];

export default function CardsSelecao() {
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, link: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.push(link);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 pt-0 pb-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map(({ id, title, icon, link }) => (
        <div
          key={id}
          onClick={() => router.push(link)}
          className="cursor-pointer bg-[#FFF] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center focus:outline-none focus:ring-4 focus:ring-cyan-400"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, link)}
        >
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-30 h-30 mb-6" // tamanho foto cards 
            />
            <h3 className="text-2xl text-black font-bold">{title}</h3>
        </div>
      ))}
    </section>
  );
}
