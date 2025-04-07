import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página Não Encontrada | AcctWise',
  description: 'A página que está a procurar não foi encontrada.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-primary mb-4 animate-scale">404</h1>
        <h2 className="text-2xl font-semibold text-secondary mb-4 animate-fade-up animate-delay-100">
          Página Não Encontrada
        </h2>
        <p className="text-gray-600 mb-8 animate-fade-up animate-delay-200">
          Lamentamos, mas a página que está a procurar não existe ou foi movida.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-button transition-all hover:scale-105 animate-fade-up animate-delay-300"
        >
          Voltar para Página Inicial
        </Link>
      </div>
    </div>
  );
}