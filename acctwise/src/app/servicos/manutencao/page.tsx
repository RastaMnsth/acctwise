import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serviços de Manutenção | AcctWise',
  description: 'Serviços profissionais de manutenção para empresas e particulares em Moscavide, Portugal.',
};

export default function ManutencaoPage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary animate-fade-up">
            Serviços de <span className="text-primary">Manutenção</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Soluções de manutenção profissionais para garantir o funcionamento eficiente dos seus sistemas e equipamentos empresariais.
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
                Na AcctWise, oferecemos serviços abrangentes de manutenção para empresas de todas as dimensões. A nossa equipa de técnicos qualificados trabalha para garantir que os seus sistemas e equipamentos funcionem de forma eficiente, prevenindo problemas antes que eles ocorram e minimizando o tempo de inatividade.
              </p>
              
              <div className="mb-10 animate-fade-right animate-delay-200">
                <h3 className="text-xl font-semibold mb-4 text-primary">Nossos Serviços de Manutenção Incluem:</h3>
                <ul className="space-y-3 list-disc pl-6">
                  <li className="text-gray-700">Manutenção preventiva e corretiva de equipamentos</li>
                  <li className="text-gray-700">Suporte técnico e resolução de problemas</li>
                  <li className="text-gray-700">Gestão e manutenção de infraestruturas de TI</li>
                  <li className="text-gray-700">Manutenção de sistemas de segurança</li>
                  <li className="text-gray-700">Serviços de backup e recuperação de dados</li>
                  <li className="text-gray-700">Instalação e configuração de sistemas</li>
                  <li className="text-gray-700">Auditorias de sistemas e equipamentos</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary animate-fade-right animate-delay-300">Porquê Escolher a AcctWise?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up animate-delay-400">
                  <h4 className="font-semibold mb-2 text-secondary">Experiência</h4>
                  <p className="text-gray-700">A nossa equipa possui vasta experiência na manutenção de diversos tipos de sistemas e equipamentos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up animate-delay-500">
                  <h4 className="font-semibold mb-2 text-secondary">Proatividade</h4>
                  <p className="text-gray-700">Focamo-nos em identificar e resolver problemas antes que afetem o funcionamento do seu negócio.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up animate-delay-600">
                  <h4 className="font-semibold mb-2 text-secondary">Tecnologia</h4>
                  <p className="text-gray-700">Utilizamos ferramentas avançadas de diagnóstico e manutenção para garantir resultados eficientes.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up animate-delay-700">
                  <h4 className="font-semibold mb-2 text-secondary">Disponibilidade</h4>
                  <p className="text-gray-700">Oferecemos suporte rápido e eficiente quando precisar, minimizando o tempo de inatividade.</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-left animate-delay-300">
              <div className="bg-white rounded-lg shadow-card p-8 sticky top-24 hover-lift">
                <h3 className="text-xl font-semibold mb-6 text-secondary">Solicite uma Consulta</h3>
                <p className="text-gray-700 mb-6">
                  Gostaria de saber mais sobre como os nossos serviços de manutenção podem beneficiar o seu negócio? Entre em contacto connosco para uma avaliação inicial gratuita.
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
                      <Link href="/servicos/contabilidade" className="text-primary hover:underline inline-flex items-center group transition-all">
                        Contabilidade
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
                      <Link href="/servicos/fiscalidade" className="text-primary hover:underline inline-flex items-center group transition-all">
                        Fiscalidade
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
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary animate-fade-up">
              Pronto para Otimizar os Seus Sistemas?
            </h2>
            <p className="text-gray-700 mb-8 animate-fade-up animate-delay-100">
              Deixe-nos cuidar da manutenção para que possa focar-se no que realmente importa: fazer crescer o seu negócio.
            </p>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-button transition-all hover:scale-105 animate-fade-up animate-delay-200"
            >
              Agende uma Avaliação Hoje
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}