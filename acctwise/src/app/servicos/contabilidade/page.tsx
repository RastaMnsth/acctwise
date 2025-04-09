import { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Serviços de Contabilidade | AcctWise',
  description: 'Serviços profissionais de contabilidade para empresas e particulares em Moscavide, Portugal.',
};

export default function ContabilidadePage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary animate-fade-up">
            Serviços de <span className="text-primary">Contabilidade</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Soluções de contabilidade personalizadas para atender às necessidades do seu negócio.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary animate-fade-right">
                Como Podemos Ajudar
              </h2>
              <p className="text-gray-700 mb-6 animate-fade-right animate-delay-100">
                Na AcctWise, oferecemos serviços contabilísticos abrangentes e personalizados para empresas de todas as dimensões. A nossa equipa de contabilistas certificados trabalha em estreita colaboração consigo para garantir que os seus registos financeiros estão precisos, atualizados e em conformidade com os requisitos legais.
              </p>
              
              <div className="mb-10 animate-fade-right animate-delay-200">
                <h3 className="text-xl font-semibold mb-4 text-primary">Nossos Serviços de Contabilidade Incluem:</h3>
                <ul className="space-y-3 list-disc pl-6">
                  <li className="text-gray-700">Processamento de transações e lançamentos contabilísticos</li>
                  <li className="text-gray-700">Reconciliações bancárias e de contas</li>
                  <li className="text-gray-700">Preparação de demonstrações financeiras mensais, trimestrais e anuais</li>
                  <li className="text-gray-700">Gestão de contas a pagar e a receber</li>
                  <li className="text-gray-700">Preparação e submissão de declarações fiscais</li>
                  <li className="text-gray-700">Assessoria contabilística e financeira</li>
                  <li className="text-gray-700">Implementação e manutenção de sistemas contabilísticos</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary animate-fade-right animate-delay-300">Porquê Escolher a AcctWise?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up animate-delay-400">
                  <h4 className="font-semibold mb-2 text-secondary">Experiência</h4>
                  <p className="text-gray-700">A nossa equipa possui anos de experiência em contabilidade para diversos setores e dimensões de negócio.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up animate-delay-500">
                  <h4 className="font-semibold mb-2 text-secondary">Personalização</h4>
                  <p className="text-gray-700">Adaptamos os nossos serviços às necessidades específicas do seu negócio, não oferecemos soluções padrão.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up animate-delay-600">
                  <h4 className="font-semibold mb-2 text-secondary">Tecnologia</h4>
                  <p className="text-gray-700">Utilizamos as mais recentes ferramentas tecnológicas para garantir eficiência e precisão.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up animate-delay-700">
                  <h4 className="font-semibold mb-2 text-secondary">Conformidade</h4>
                  <p className="text-gray-700">Mantemo-nos atualizados com as constantes mudanças na legislação fiscal e contabilística.</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-left animate-delay-300">
              <div className="bg-white rounded-lg shadow-card p-8 sticky top-24 hover-lift">
                <h3 className="text-xl font-semibold mb-6 text-secondary">Solicite uma Consulta</h3>
                <p className="text-gray-700 mb-6">
                  Gostaria de saber mais sobre como os nossos serviços de contabilidade podem beneficiar o seu negócio? Entre em contacto connosco para uma consulta inicial gratuita.
                </p>
                <Link 
                  href="/contacto" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-button transition-all hover:scale-105"
                >
                  Contacte-nos
                </Link>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-4 text-secondary">Outros Serviços</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/servicos/fiscalidade" className="text-primary hover:underline inline-flex items-center group transition-all">
                        Fiscalidade
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicos/consultoria" className="text-primary hover:underline inline-flex items-center group transition-all">
                        Consultoria
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicos/relatorios" className="text-primary hover:underline inline-flex items-center group transition-all">
                        Relatórios Financeiros
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Pronto para Simplificar a sua Contabilidade?"
        subtitle="Deixe-nos cuidar dos números para que possa focar-se no que realmente importa: fazer crescer o seu negócio."
        buttonText="Agende uma Consulta Hoje"
        buttonLink="/contacto"
        variant="secondary"
      />
    </main>
  );
}