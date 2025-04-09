import { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Serviços de Fiscalidade | AcctWise',
  description: 'Serviços profissionais de fiscalidade e planeamento fiscal para empresas e particulares em Moscavide, Portugal.',
};

export default function FiscalidadePage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary">
            Serviços de <span className="text-primary">Fiscalidade</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Soluções fiscais personalizadas para otimizar a sua situação tributária de forma legal e eficiente.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
                Especialistas em Fiscalidade
              </h2>
              <p className="text-gray-700 mb-6">
                Na AcctWise, compreendemos que a gestão fiscal é uma componente crítica para o sucesso financeiro da sua empresa. Os nossos especialistas em fiscalidade possuem um conhecimento profundo da legislação fiscal portuguesa e estão sempre atualizados sobre as mais recentes alterações fiscais que podem afetar o seu negócio.
              </p>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-primary">Os Nossos Serviços de Fiscalidade Incluem:</h3>
                <ul className="space-y-3 list-disc pl-6">
                  <li className="text-gray-700">Preparação e submissão de declarações fiscais (IRS, IRC, IVA)</li>
                  <li className="text-gray-700">Planeamento fiscal estratégico para empresas e particulares</li>
                  <li className="text-gray-700">Consultoria sobre incentivos fiscais e benefícios disponíveis</li>
                  <li className="text-gray-700">Representação perante as autoridades fiscais</li>
                  <li className="text-gray-700">Assessoria em auditorias fiscais</li>
                  <li className="text-gray-700">Apoio em processos de reorganização empresarial</li>
                  <li className="text-gray-700">Aconselhamento sobre tributação internacional</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">Planeamento Fiscal Estratégico</h3>
              <p className="text-gray-700 mb-6">
                Um planeamento fiscal eficaz pode resultar em poupanças significativas para o seu negócio. Trabalhamos consigo para identificar oportunidades legítimas de minimizar a sua carga fiscal, garantindo sempre o cumprimento de todas as obrigações legais.
              </p>
              
              <div className="bg-accent p-6 rounded-lg mb-10">
                <h4 className="font-semibold mb-2 text-secondary">A Nossa Abordagem</h4>
                <p className="text-gray-700">
                  Na AcctWise, acreditamos num planeamento fiscal ético e transparente. Não procuramos esquemas agressivos que possam comprometer a reputação do seu negócio, mas sim estratégias sólidas e comprovadas que se alinham com os seus objetivos a longo prazo.
                </p>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">Vantagens dos Nossos Serviços Fiscais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Minimização de Riscos</h4>
                  <p className="text-gray-700">Reduzimos o risco de erros e omissões nas suas declarações fiscais, evitando coimas e penalizações.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Otimização Fiscal</h4>
                  <p className="text-gray-700">Identificamos oportunidades legais para reduzir a sua carga fiscal através de estratégias legítimas.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Tranquilidade</h4>
                  <p className="text-gray-700">Tem a certeza de que todas as suas obrigações fiscais estão a ser geridas por profissionais qualificados.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Acompanhamento Constante</h4>
                  <p className="text-gray-700">Mantemo-lo informado sobre alterações legislativas que possam afetar a sua situação fiscal.</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-card p-8 sticky top-24">
                <h3 className="text-xl font-semibold mb-6 text-secondary">Otimize a Sua Situação Fiscal</h3>
                <p className="text-gray-700 mb-6">
                  Não pague mais impostos do que deve. Os nossos especialistas em fiscalidade podem ajudá-lo a encontrar soluções legais para otimizar a sua carga fiscal.
                </p>
                <Link 
                  href="/contacto" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-button transition-colors"
                >
                  Solicitar Avaliação Fiscal
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
                      <Link href="/servicos/consultoria" className="text-primary hover:underline inline-flex items-center">
                        Consultoria
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
      
      <CTASection 
        title="Precisa de Ajuda com a Sua Fiscalidade?"
        subtitle="Fale com os nossos especialistas em fiscalidade hoje e descubra como podemos ajudá-lo a otimizar a sua situação fiscal de forma legal e eficiente."
        buttonText="Agende uma Consulta Fiscal"
        buttonLink="/contacto"
        variant="primary"
      />
    </main>
  );
}