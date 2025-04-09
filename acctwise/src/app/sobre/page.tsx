import { Metadata } from 'next';
import Image from 'next/image';
import CTASection from '@/components/shared/CTASection';
import { generateSeoMetadata, pageSeoConfigs } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata(pageSeoConfigs.about, 'sobre');

export default function SobrePage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary animate-fade-up">
            Sobre a <span className="text-primary">AcctWise</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Somos especialistas em contabilidade, consultoria e manutenção, dedicados a oferecer soluções personalizadas para o seu negócio em Moscavide e região de Lisboa.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-right">
              <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
                A Nossa História
              </h2>
              <p className="text-gray-700 mb-4">
                Fundada em 2020 em Moscavide, a AcctWise nasceu da visão de um grupo de profissionais experientes que identificaram a necessidade de serviços contabilísticos e de consultoria mais personalizados e atentos às necessidades específicas de cada cliente.
              </p>
              <p className="text-gray-700 mb-4">
                Começámos com uma pequena equipa dedicada a servir empresas locais, e rapidamente expandimos a nossa carteira de clientes devido à nossa abordagem centrada no cliente e aos resultados consistentes que proporcionamos.
              </p>
              <p className="text-gray-700 mb-4">
                Hoje, a AcctWise é reconhecida pela sua excelência na prestação de serviços contabilísticos, fiscais e de consultoria, ajudando empresas de diversos setores a otimizar os seus processos financeiros e a tomar decisões estratégicas mais informadas.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover-lift animate-fade-left">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image 
                  src="/about/team-photo.jpg" 
                  alt="Equipa AcctWise" 
                  width={600} 
                  height={400}
                  className="object-cover h-full w-full transition-transform hover:scale-105 duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23E8F5E9"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%230F5132">Foto da Equipa AcctWise</text></svg>';
                  }}
                />
              </div>
              <p className="text-center text-gray-600 mt-3 italic">A equipa AcctWise reunida no nosso escritório em Moscavide</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12 text-secondary animate-fade-up">
            Os Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card hover-lift transition-all duration-300 animate-fade-up animate-delay-100">
              <div className="text-primary mb-4 transition-transform hover:scale-110">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Excelência</h3>
              <p className="text-gray-700">
                Comprometemo-nos a oferecer serviços da mais alta qualidade, superando sempre as expectativas dos nossos clientes e buscando constantemente aperfeiçoar os nossos processos e competências.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card hover-lift transition-all duration-300 animate-fade-up animate-delay-200">
              <div className="text-primary mb-4 transition-transform hover:scale-110">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Integridade</h3>
              <p className="text-gray-700">
                Atuamos com honestidade, transparência e ética em todas as nossas interações, construindo relações de confiança duradouras com os nossos clientes, parceiros e colaboradores.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card hover-lift transition-all duration-300 animate-fade-up animate-delay-300">
              <div className="text-primary mb-4 transition-transform hover:scale-110">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Inovação</h3>
              <p className="text-gray-700">
                Estamos sempre à procura de novas formas de melhorar os nossos serviços e processos, adotando as melhores práticas e tecnologias para oferecer soluções eficientes e adaptadas às necessidades em evolução.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12 text-secondary animate-fade-up">
            A Nossa Missão
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto animate-fade-up animate-delay-100">
            <p className="text-gray-700 text-lg text-center">
              Na AcctWise, a nossa missão é capacitar empresas e empreendedores através de serviços financeiros e de consultoria de excelência, proporcionando-lhes as ferramentas e conhecimentos necessários para tomarem decisões informadas e alcançarem o sucesso nos seus negócios.
            </p>
            <div className="mt-8 border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="inline-block text-primary mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-secondary">Crescimento</h3>
                <p className="text-gray-600 text-sm">Impulsionar o crescimento sustentável dos nossos clientes</p>
              </div>
              <div className="text-center">
                <div className="inline-block text-primary mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-secondary">Confiança</h3>
                <p className="text-gray-600 text-sm">Construir relações baseadas na transparência e confiança</p>
              </div>
              <div className="text-center">
                <div className="inline-block text-primary mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="font-medium text-secondary">Comunidade</h3>
                <p className="text-gray-600 text-sm">Contribuir para o desenvolvimento da comunidade local</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Vamos Trabalhar Juntos"
        subtitle="Conheça mais sobre como podemos ajudar o seu negócio a crescer e prosperar com os nossos serviços personalizados."
        buttonText="Entre em Contacto"
        buttonLink="/contacto"
        variant="primary"
      />
    </main>
  );
}