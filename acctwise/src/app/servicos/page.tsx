import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serviços | AcctWise',
  description: 'Conheça os nossos serviços de contabilidade, fiscalidade, consultoria, manutenção e relatórios financeiros em Moscavide, Portugal.',
};

export default function ServicosPage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary animate-fade-up">
            Os Nossos <span className="text-primary">Serviços</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Oferecemos uma gama completa de serviços contabilísticos, consultoria e manutenção para ajudar o seu negócio a prosperar.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card hover-lift transition-all duration-300 animate-fade-up animate-delay-200">
              <div className="text-primary mb-4 transition-transform hover:scale-110">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary">Contabilidade</h3>
              <p className="text-gray-700 mb-6">
                Serviços contabilísticos completos, incluindo processamento de transações, reconciliações e preparação de demonstrações financeiras.
              </p>
              <Link 
                href="/servicos/contabilidade" 
                className="text-primary font-medium hover:underline inline-flex items-center group transition-all"
              >
                Saber Mais
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card hover-lift transition-all duration-300 animate-fade-up animate-delay-300">
              <div className="text-primary mb-4 transition-transform hover:scale-110">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm2 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary">Fiscalidade</h3>
              <p className="text-gray-700 mb-6">
                Preparação e submissão de declarações fiscais, planeamento fiscal e representação perante as autoridades fiscais.
              </p>
              <Link 
                href="/servicos/fiscalidade" 
                className="text-primary font-medium hover:underline inline-flex items-center group transition-all"
              >
                Saber Mais
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card hover-lift transition-all duration-300 animate-fade-up animate-delay-400">
              <div className="text-primary mb-4 transition-transform hover:scale-110">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary">Consultoria</h3>
              <p className="text-gray-700 mb-6">
                Aconselhamento financeiro e empresarial, análise de negócios e planeamento estratégico para o crescimento do seu negócio.
              </p>
              <Link 
                href="/servicos/consultoria" 
                className="text-primary font-medium hover:underline inline-flex items-center group transition-all"
              >
                Saber Mais
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card hover-lift transition-all duration-300 animate-fade-up animate-delay-500">
              <div className="text-primary mb-4 transition-transform hover:scale-110">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary">Manutenção</h3>
              <p className="text-gray-700 mb-6">
                Serviços completos de manutenção preventiva e corretiva para garantir o funcionamento eficiente dos seus sistemas e equipamentos.
              </p>
              <Link 
                href="/servicos/manutencao" 
                className="text-primary font-medium hover:underline inline-flex items-center group transition-all"
              >
                Saber Mais
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card hover-lift transition-all duration-300 animate-fade-up animate-delay-600">
              <div className="text-primary mb-4 transition-transform hover:scale-110">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary">Relatórios Financeiros</h3>
              <p className="text-gray-700 mb-6">
                Preparação de relatórios financeiros detalhados, análise de desempenho e previsões orçamentais.
              </p>
              <Link 
                href="/servicos/relatorios" 
                className="text-primary font-medium hover:underline inline-flex items-center group transition-all"
              >
                Saber Mais
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary animate-fade-up">
              Precisa de Ajuda com o seu Negócio?
            </h2>
            <p className="text-gray-700 mb-8 animate-fade-up animate-delay-100">
              Entre em contacto connosco hoje para uma consulta inicial gratuita. Estamos prontos para ajudar a sua empresa a atingir todo o seu potencial.
            </p>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-button transition-all hover:scale-105 animate-fade-up animate-delay-200"
            >
              Contacte-nos Hoje
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}