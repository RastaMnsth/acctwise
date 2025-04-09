import { Metadata } from 'next';
import CTASection from '@/components/shared/CTASection';
import Image from 'next/image';
import { MapPin, Calendar, Award, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Nós | AcctWise',
  description: 'Conheça a AcctWise: empresa especializada em serviços de contabilidade, consultoria e manutenção em Moscavide, Portugal. Descubra nossa história, valores e equipa de profissionais qualificados.',
  openGraph: {
    title: 'Sobre Nós | AcctWise',
    description: 'Conheça a AcctWise: especialistas em contabilidade, consultoria e manutenção em Moscavide, Lisboa.',
    images: ['/images/about-og.jpg'],
  },
};

export default function SobrePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent via-accent/80 to-accent/40 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-secondary animate-fade-up">
              Sobre a <span className="text-primary relative">
                AcctWise
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M0,5 C40,0 160,0 200,5" stroke="#4E9F3D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 animate-fade-up animate-delay-100">
              Somos uma equipa dedicada de especialistas em contabilidade, consultoria e manutenção, comprometidos em oferecer soluções personalizadas para o sucesso do seu negócio em Moscavide e Lisboa.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-10 animate-fade-up animate-delay-200">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Moscavide, Lisboa</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Fundada em 2020</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-5 h-5" />
                <span className="font-medium">Equipa Especializada</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block text-sm font-medium text-primary mb-2">NOSSA HISTÓRIA</span>
              <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
                A Evolução da AcctWise
              </h2>
              <p className="text-gray-700 mb-4">
                A AcctWise foi fundada em 2020 por um grupo de profissionais experientes no setor de contabilidade e consultoria empresarial, identificando a necessidade de serviços financeiros mais personalizados e acessíveis para pequenas e médias empresas em Moscavide e arredores de Lisboa.
              </p>
              <p className="text-gray-700 mb-4">
                Desde o nosso início, priorizamos a combinação de conhecimento técnico sólido com uma abordagem centrada no cliente. Em apenas 5 anos, expandimos a nossa oferta para incluir também serviços de manutenção, criando uma solução completa para as necessidades operacionais das empresas locais.
              </p>
              <p className="text-gray-700 mb-4">
                Hoje, a AcctWise é reconhecida pela qualidade e fiabilidade dos seus serviços, tendo construído uma carteira de clientes fidelizados em diversos setores económicos.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-gray-100 to-white p-1 rounded-lg shadow-lg">
              <div className="h-80 rounded-lg bg-gray-200 flex items-center justify-center relative overflow-hidden">
                <p className="text-gray-500 italic absolute inset-0 flex items-center justify-center">Imagem da Sede da AcctWise</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-2">NOSSA MISSÃO E VISÃO</span>
            <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
              O Que Nos Orienta
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-card border-t-4 border-primary transition-all hover:shadow-elevated">
              <h3 className="text-2xl font-semibold mb-4 text-secondary flex items-center gap-2">
                <span className="text-primary">Missão</span>
              </h3>
              <p className="text-gray-700 mb-4">
                Fornecer serviços contabilísticos, de manutenção e consultoria de alta qualidade que permitam aos nossos clientes focarem-se no crescimento do seu negócio, enquanto nós cuidamos da parte administrativa e financeira com precisão e confiabilidade.
              </p>
              <p className="text-gray-700">
                Comprometemo-nos a entender profundamente as necessidades específicas de cada cliente, oferecendo soluções à medida que otimizam resultados e minimizam riscos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card border-t-4 border-primary transition-all hover:shadow-elevated">
              <h3 className="text-2xl font-semibold mb-4 text-secondary flex items-center gap-2">
                <span className="text-primary">Visão</span>
              </h3>
              <p className="text-gray-700 mb-4">
                Ser reconhecida como a empresa de referência em serviços integrados de contabilidade, manutenção e consultoria em Moscavide e região de Lisboa, diferenciando-nos pela excelência, inovação e pelo relacionamento próximo com os clientes.
              </p>
              <p className="text-gray-700">
                Aspiramos a ser parceiros estratégicos no sucesso dos nossos clientes, contribuindo ativamente para o crescimento sustentável dos seus negócios através da nossa experiência e dedicação.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-2">NOSSOS VALORES</span>
            <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
              Princípios Que Nos Guiam
            </h2>
            <p className="text-gray-700">
              Os nossos valores estão no centro de tudo o que fazemos, guiando as nossas interações com clientes, parceiros e a comunidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Excelência</h3>
              <p className="text-gray-700">
                Comprometemo-nos a oferecer serviços da mais alta qualidade, superando sempre as expectativas dos nossos clientes através de um trabalho meticuloso e responsável.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Integridade</h3>
              <p className="text-gray-700">
                Atuamos com honestidade e transparência em todas as nossas interações, construindo relações de confiança duradouras baseadas na ética profissional e no respeito mútuo.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Inovação</h3>
              <p className="text-gray-700">
                Estamos continuamente à procura de novas formas de melhorar os nossos serviços e processos, adaptando-nos às necessidades em evolução do mercado e incorporando as melhores práticas.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Proximidade</h3>
              <p className="text-gray-700">
                Valorizamos o relacionamento próximo com cada cliente, oferecendo um atendimento personalizado e acessível que nos permite entender profundamente as suas necessidades.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Responsabilidade</h3>
              <p className="text-gray-700">
                Assumimos total responsabilidade pelo nosso trabalho, comprometendo-nos com prazos, confidencialidade e com a precisão em cada serviço que prestamos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Crescimento</h3>
              <p className="text-gray-700">
                Acreditamos no desenvolvimento contínuo, tanto da nossa equipa como dos nossos clientes, promovendo um ambiente de aprendizagem e aprimoramento constante.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-medium text-accent mb-2">NOSSOS DIFERENCIAIS</span>
            <h2 className="text-3xl font-heading font-semibold mb-6">
              Por Que Escolher a AcctWise?
            </h2>
            <p className="text-gray-300">
              Entendemos que a escolha de um parceiro para os seus serviços contabilísticos e de consultoria é uma decisão importante.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start bg-secondary/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 transition-all hover:bg-secondary/70">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Equipa Experiente</h3>
                <p className="text-gray-300">
                  A nossa equipa é formada por profissionais qualificados com ampla experiência em contabilidade, fiscalidade e consultoria empresarial, garantindo um serviço de excelência.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start bg-secondary/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 transition-all hover:bg-secondary/70">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Serviços Integrados</h3>
                <p className="text-gray-300">
                  Oferecemos uma solução completa que vai desde a contabilidade até à manutenção, permitindo que tenha todos os serviços essenciais num único parceiro de confiança.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start bg-secondary/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 transition-all hover:bg-secondary/70">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Atendimento Personalizado</h3>
                <p className="text-gray-300">
                  Cada cliente recebe atenção personalizada, com soluções adaptadas às necessidades específicas do seu negócio e setor, num acompanhamento próximo e contínuo.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start bg-secondary/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 transition-all hover:bg-secondary/70">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Tecnologia Avançada</h3>
                <p className="text-gray-300">
                  Utilizamos ferramentas tecnológicas modernas para otimizar processos e garantir maior eficiência, precisão e segurança em todos os nossos serviços.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start bg-secondary/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 transition-all hover:bg-secondary/70">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Conhecimento Local</h3>
                <p className="text-gray-300">
                  Com forte presença em Moscavide e na região de Lisboa, compreendemos profundamente o contexto local e as particularidades do mercado português.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start bg-secondary/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 transition-all hover:bg-secondary/70">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Compromisso com Resultados</h3>
                <p className="text-gray-300">
                  O nosso sucesso está diretamente ligado ao dos nossos clientes. Focamo-nos em contribuir para o crescimento sustentável do seu negócio através de estratégias eficazes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-2">NOSSA EQUIPA</span>
            <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary">
              Especialistas ao Seu Serviço
            </h2>
            <p className="text-gray-700">
              Conheça os profissionais dedicados que trabalham diariamente para oferecer soluções de excelência para o seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for team members - to be replaced with actual photos */}
            <div className="bg-white rounded-lg overflow-hidden shadow-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 italic">Foto do Membro da Equipa</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary">Nome do Profissional</h3>
                <p className="text-primary font-medium mb-3">Contabilista Certificado</p>
                <p className="text-gray-700">Especialista em contabilidade e fiscalidade com mais de 10 anos de experiência no setor.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 italic">Foto do Membro da Equipa</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary">Nome do Profissional</h3>
                <p className="text-primary font-medium mb-3">Consultor Financeiro</p>
                <p className="text-gray-700">Especialista em consultoria empresarial, focado em estratégias de crescimento e otimização de recursos.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 italic">Foto do Membro da Equipa</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary">Nome do Profissional</h3>
                <p className="text-primary font-medium mb-3">Especialista em Manutenção</p>
                <p className="text-gray-700">Profissional técnico especializado em serviços de manutenção preventiva e corretiva para empresas.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/equipa" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              Ver Toda a Equipa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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