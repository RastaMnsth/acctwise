import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Relatórios Financeiros | AcctWise',
  description: 'Serviços profissionais de relatórios financeiros e análise de dados para empresas em Moscavide, Portugal.',
};

export default function RelatoriosPage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary">
            Relatórios <span className="text-primary">Financeiros</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Informações financeiras detalhadas e insights estratégicos para impulsionar decisões de negócio mais inteligentes.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
                Relatórios Financeiros Precisos e Detalhados
              </h2>
              <p className="text-gray-700 mb-6">
                Na AcctWise, sabemos que decisões de negócio eficazes dependem de informações financeiras precisas e atualizadas. Os nossos serviços de relatórios financeiros fornecem uma visão clara e abrangente da saúde financeira da sua empresa, permitindo-lhe tomar decisões estratégicas informadas.
              </p>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-primary">Os Nossos Serviços de Relatórios Financeiros Incluem:</h3>
                <ul className="space-y-3 list-disc pl-6">
                  <li className="text-gray-700">Demonstrações financeiras mensais, trimestrais e anuais</li>
                  <li className="text-gray-700">Análise de desempenho financeiro e comparações com períodos anteriores</li>
                  <li className="text-gray-700">Relatórios de fluxo de caixa e previsões de liquidez</li>
                  <li className="text-gray-700">Análise de rentabilidade por produto, serviço ou departamento</li>
                  <li className="text-gray-700">Relatórios de orçamento vs. real e análise de variações</li>
                  <li className="text-gray-700">KPIs financeiros e dashboards personalizados</li>
                  <li className="text-gray-700">Relatórios fiscais e conformidade regulatória</li>
                  <li className="text-gray-700">Relatórios para investidores e financiadores</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">Abordagem Personalizada</h3>
              <p className="text-gray-700 mb-6">
                Cada negócio tem necessidades de informação únicas. Os nossos relatórios financeiros são personalizados para fornecer exatamente os dados e insights que são mais relevantes para a sua empresa e para o seu setor. Quer precise de relatórios simples ou de análises financeiras complexas, podemos adaptar os nossos serviços às suas necessidades específicas.
              </p>
              
              <div className="bg-accent p-6 rounded-lg mb-10">
                <h4 className="font-semibold mb-2 text-secondary">Tecnologia Avançada</h4>
                <p className="text-gray-700">
                  Utilizamos ferramentas tecnológicas avançadas para recolher, analisar e apresentar dados financeiros de forma eficiente e precisa. Os nossos sistemas permitem a geração de relatórios em tempo real, fornecendo-lhe as informações mais atualizadas sobre o desempenho do seu negócio.
                </p>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">Benefícios dos Nossos Relatórios Financeiros</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Tomada de Decisão Informada</h4>
                  <p className="text-gray-700">Acesso a dados financeiros precisos e atualizados para apoiar decisões estratégicas.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Identificação de Tendências</h4>
                  <p className="text-gray-700">Visualize tendências financeiras e padrões que podem influenciar a direção do seu negócio.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Melhor Controlo Financeiro</h4>
                  <p className="text-gray-700">Monitorize o desempenho financeiro e identifique áreas que necessitam de atenção.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-secondary">Planeamento Estratégico</h4>
                  <p className="text-gray-700">Utilize dados financeiros históricos e previsões para um planeamento eficaz a longo prazo.</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-card p-8 sticky top-24">
                <h3 className="text-xl font-semibold mb-6 text-secondary">Transforme Dados em Insights</h3>
                <p className="text-gray-700 mb-6">
                  Descubra como os nossos serviços de relatórios financeiros podem proporcionar uma visão clara da saúde financeira do seu negócio e apoiar o seu crescimento.
                </p>
                <Link 
                  href="/contacto" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-button transition-colors"
                >
                  Solicitar Informações
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
                      <Link href="/servicos/consultoria" className="text-primary hover:underline inline-flex items-center">
                        Consultoria
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
              Pronto para Obter Mais Insights Financeiros?
            </h2>
            <p className="text-gray-700 mb-8">
              Entre em contacto connosco hoje para descobrir como os nossos serviços de relatórios financeiros podem ajudar o seu negócio a prosperar.
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