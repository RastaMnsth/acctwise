"use client";
import Link from "next/link";
import { 
  CalculatorIcon, 
  WrenchScrewdriverIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  BuildingLibraryIcon 
} from "@heroicons/react/24/outline";

// Define service types
type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

export const ServicesSection = () => {
  // Services data with modern Heroicons v2
  const services: Service[] = [
    {
      id: "contabilidade",
      title: "Contabilidade",
      description: "Serviços de contabilidade completos e personalizados para empresas de todos os tamanhos e setores.",
      icon: <CalculatorIcon className="w-6 h-6" />,
      href: "/servicos/contabilidade",
    },
    {
      id: "manutencao",
      title: "Manutenção",
      description: "Serviços completos de manutenção, garantindo o funcionamento eficiente dos seus sistemas e equipamentos empresariais.",
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
      href: "/servicos/manutencao",
    },
    {
      id: "fiscalidade",
      title: "Fiscalidade",
      description: "Consultoria fiscal especializada, ajudando a otimizar a sua carga tributária e cumprir todas as obrigações fiscais.",
      icon: <DocumentTextIcon className="w-6 h-6" />,
      href: "/servicos/fiscalidade",
    },
    {
      id: "consultoria",
      title: "Consultoria Empresarial",
      description: "Assessoria estratégica para decisões financeiras, processos de negócio e planeamento do crescimento da sua empresa.",
      icon: <BuildingLibraryIcon className="w-6 h-6" />,
      href: "/servicos/consultoria",
    },
    {
      id: "relatorios",
      title: "Relatórios Financeiros",
      description: "Relatórios detalhados e análises financeiras que ajudam a tomar decisões informadas para o crescimento do seu negócio.",
      icon: <ChartBarIcon className="w-6 h-6" />,
      href: "/servicos/relatorios",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-accent-light/50 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply blur-xl opacity-70"></div>
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">Os Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4 animate-fade-up animate-delay-100">
            Soluções Especializadas Para o Seu Negócio
          </h2>
          <p className="text-text text-lg animate-fade-up animate-delay-200">
            Na AcctWise oferecemos uma gama completa de serviços financeiros e de consultoria para impulsionar o crescimento da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Card inner elements */}
              <div className="p-8">
                <div className="relative mb-6">
                  {/* Decorative circle behind icon */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full opacity-70 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  {/* Icon with animated border */}
                  <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-white text-primary rounded-xl border-2 border-accent group-hover:border-primary transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-text mb-6">{service.description}</p>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors"
                >
                  <span className="mr-2 relative">
                    Saber Mais
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-up animate-delay-600">
          <Link 
            href="/servicos"
            className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg px-8 py-4 font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span>Ver Todos os Serviços</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};