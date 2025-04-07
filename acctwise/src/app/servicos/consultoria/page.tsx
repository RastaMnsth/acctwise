import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serviços de Consultoria | AcctWise',
  description: 'Consultoria financeira e empresarial para otimizar o desempenho do seu negócio em Moscavide, Portugal.',
};

export default function ConsultoriaPage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary">
            Serviços de <span className="text-primary">Consultoria</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Consultoria estratégica para impulsionar o crescimento e a eficiência do seu negócio.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
                Soluções de Consultoria Personalizadas
              </h2>
              <p className="text-gray-700 mb-6">
                A AcctWise oferece serviços de consultoria empresarial e financeira adaptados às necessidades específicas do seu negócio. Trabalhamos em parceria consigo para identificar oportunidades de melhoria, otimizar processos e desenvolver estratégias que impulsionem o crescimento sustentável da sua empresa.
              </p>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-primary">Os Nossos Serviços de Consultoria Incluem:</h3>
                <ul className="space-y-3 list-disc pl-6">
                  <li className="text-gray-700">Análise financeira e diagnóstico empresarial</li>
                  <li className="text-gray-700">Planeamento estratégico e desenvolvimento de negócio</li>
                  <li className="text-gray-700">Optimização de processos e redução de custos</li>
                  <li className="text-gray-700">Consultoria em fusões e aquisições</li>
                  <li className="text-gray-700">Reestruturação empresarial</li>
                  <li className="text-gray-700">Análise de viabilidade para novos projetos</li>
                  <li className="text-gray-700">Avaliação de empresas e negócios</li>
                  <li className="text-gray-700">Implementação de sistemas de gestão financeira</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">A Nossa Metodologia</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-secondary">Diagnóstico</h4>
                  <p className="text-gray-700 text-sm">Análise profunda da situação atual da sua empresa</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-secondary">Planeamento</h4>
                  <p className="text-gray-700 text-sm">Desenvolvimento de estratégias e soluções personalizadas</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-secondary">Implementação</h4>
                  <p className="text-gray-700 text-sm">Execução das estratégias com acompanhamento especializado</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-secondary">Avaliação</h4>
                  <p className="text-gray-700 text-sm">Monitorização contínua e ajustes para maximizar resultados</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">Benefícios da Nossa Consultoria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Visão Estratégica</h4>
                  <p className="text-gray-700">Obtenha uma perspetiva clara sobre o seu negócio e as oportunidades de mercado disponíveis.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Crescimento Sustentável</h4>
                  <p className="text-gray-700">Desenvolvemos estratégias que promovem o crescimento a longo prazo, não apenas soluções rápidas.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Eficiência Operacional</h4>
                  <p className="text-gray-700">Identificamos oportunidades para otimizar processos e reduzir custos desnecessários.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Vantagem Competitiva</h4>
                  <p className="text-gray-700">Ajudamos a sua empresa a destacar-se num mercado cada vez mais competitivo.</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-card p-8 sticky top-24">
                <h3 className="text-xl font-semibold mb-6 text-secondary">Eleve o Seu Negócio</h3>
                <p className="text-gray-700 mb-6">
                  Está pronto para levar o seu negócio ao próximo nível? A nossa equipa de consultores está preparada para ajudá-lo a atingir os seus objetivos empresariais.
                </p>
                <Link 
                  href="/contacto" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-button transition-colors"
                >
                  Solicitar Consulta
                </Link>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-4 text-secondary">Outros Serviços</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/servicos/contabilidade" className="text-primary hover:underline inline-flex items-center">
                        Contabilidade
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicos/fiscalidade" className="text-primary hover:underline inline-flex items-center">
                        Fiscalidade
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicos/relatorios" className="text-primary hover:underline inline-flex items-center">
                        Relatórios Financeiros
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
              Pronto para Transformar o Seu Negócio?
            </h2>
            <p className="text-gray-700 mb-8">
              Entre em contacto connosco hoje para uma análise gratuita das suas necessidades de consultoria empresarial.
            </p>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-button transition-colors"
            >
              Contacte-nos Hoje
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}