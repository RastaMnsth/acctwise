import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós | AcctWise',
  description: 'Conheça a AcctWise: empresa especializada em serviços de contabilidade, consultoria e manutenção em Moscavide, Portugal.',
};

export default function SobrePage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary">
            Sobre a <span className="text-primary">AcctWise</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Somos especialistas em contabilidade, consultoria e manutenção, dedicados a oferecer soluções personalizadas para o seu negócio.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
                A Nossa História
              </h2>
              <p className="text-gray-700 mb-4">
                Fundada em 2020, a AcctWise nasceu da visão de oferecer serviços contabilísticos de excelência com um toque pessoal. Desde então, temos crescido constantemente, mantendo sempre o compromisso com a qualidade e a satisfação do cliente.
              </p>
              <p className="text-gray-700 mb-4">
                A nossa equipa é composta por profissionais experientes e qualificados, prontos para ajudar a sua empresa a atingir os seus objetivos financeiros e fiscais.
              </p>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 italic">Imagem da Equipa AcctWise</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12 text-secondary">
            Os Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Excelência</h3>
              <p className="text-gray-700">
                Comprometemo-nos a oferecer serviços da mais alta qualidade, superando sempre as expectativas dos nossos clientes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Integridade</h3>
              <p className="text-gray-700">
                Atuamos com honestidade e transparência em todas as nossas interações, construindo relações de confiança duradouras.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Inovação</h3>
              <p className="text-gray-700">
                Estamos sempre a procura de novas formas de melhorar os nossos serviços e processos, adaptando-nos às necessidades em evolução.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}