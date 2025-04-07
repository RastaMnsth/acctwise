import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'A Nossa Equipa | AcctWise',
  description: 'Conheça a equipa de profissionais da AcctWise dedicada a fornecer serviços de contabilidade e consultoria de excelência em Moscavide, Portugal.',
};

export default function EquipaPage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary">
            A Nossa <span className="text-primary">Equipa</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Uma equipa de profissionais qualificados e dedicados, empenhados em fornecer serviços de excelência aos nossos clientes.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold mb-12 text-center text-secondary">
              Liderança
            </h2>
            
            {/* CEO Profile */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-gray-200 h-full min-h-[300px] md:min-h-full flex items-center justify-center">
                  <div className="text-gray-500 italic flex flex-col items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <p className="mt-4">Foto de Isabel Cardante</p>
                  </div>
                </div>
                <div className="p-8 md:col-span-2">
                  <h3 className="text-2xl font-heading font-semibold mb-2 text-secondary">Isabel Cardante</h3>
                  <p className="text-primary font-medium mb-4">CEO & Fundadora</p>
                  <p className="text-gray-700 mb-6">
                    Isabel Cardante possui mais de 20 anos de experiência em contabilidade e consultoria financeira. Antes de fundar a AcctWise em 2020, Isabel trabalhou em algumas das principais empresas de contabilidade em Portugal, acumulando uma vasta experiência e conhecimento no setor.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Com formação avançada em Contabilidade e Gestão pela Universidade de Lisboa, Isabel é conhecida pela sua abordagem personalizada e pela capacidade de traduzir conceitos financeiros complexos em estratégias práticas para os seus clientes.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="bg-accent p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="mailto:isabel@acc-wise.com" 
                      aria-label="Email"
                      className="bg-accent p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-heading font-semibold mt-16 mb-12 text-center text-secondary">
            A Nossa Equipa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-gray-500 italic flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="mt-2">Foto do Colaborador</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-secondary">António Silva</h3>
                <p className="text-primary font-medium mb-4">Contabilista Sénior</p>
                <p className="text-gray-700 mb-4">
                  Com mais de 15 anos de experiência em contabilidade empresarial, António é especialista em serviços para PMEs.
                </p>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:antonio@acc-wise.com" 
                    aria-label="Email"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-gray-500 italic flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="mt-2">Foto da Colaboradora</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-secondary">Maria Costa</h3>
                <p className="text-primary font-medium mb-4">Consultora Fiscal</p>
                <p className="text-gray-700 mb-4">
                  Especialista em fiscalidade empresarial e pessoal, Maria ajuda os clientes a otimizar a sua situação fiscal.
                </p>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:maria@acc-wise.com" 
                    aria-label="Email"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-gray-500 italic flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="mt-2">Foto do Colaborador</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-secondary">Pedro Santos</h3>
                <p className="text-primary font-medium mb-4">Consultor Financeiro</p>
                <p className="text-gray-700 mb-4">
                  Pedro é especialista em análise financeira e planeamento estratégico para empresas em crescimento.
                </p>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:pedro@acc-wise.com" 
                    aria-label="Email"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
              Junte-se à Nossa Equipa
            </h2>
            <p className="text-gray-700 mb-8">
              Estamos sempre à procura de talentos apaixonados por contabilidade e finanças para se juntarem à nossa equipa. Se está interessado em trabalhar connosco, entre em contacto.
            </p>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-button transition-colors"
            >
              Contacte-nos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}