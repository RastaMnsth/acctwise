"use client";
import Link from "next/link";

// Define service types
type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

export const ServicesSection = () => {
  // Services data with SVG icons
  const services: Service[] = [
    {
      id: "contabilidade",
      title: "Contabilidade",
      description: "Serviços de contabilidade completos e personalizados para empresas de todos os tamanhos e setores.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: "/servicos/contabilidade",
    },
    {
      id: "fiscalidade",
      title: "Fiscalidade",
      description: "Consultoria fiscal especializada, ajudando a otimizar a sua carga tributária e cumprir todas as obrigações fiscais.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      href: "/servicos/fiscalidade",
    },
    {
      id: "consultoria",
      title: "Consultoria Empresarial",
      description: "Assessoria estratégica para decisões financeiras, processos de negócio e planeamento do crescimento da sua empresa.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      href: "/servicos/consultoria",
    },
    {
      id: "relatorios",
      title: "Relatórios Financeiros",
      description: "Elaboração de relatórios financeiros detalhados e personalizados para apoiar a tomada de decisões estratégicas.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      href: "/servicos/relatorios",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-secondary mb-4">
            Os Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-gray-600">
            Fornecemos uma gama completa de serviços de contabilidade e consultoria para responder às necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-accent w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href={service.href}
                className="text-primary font-medium hover:text-primary-dark flex items-center transition-colors"
              >
                Saber Mais
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/servicos"
            className="btn btn-primary px-6 py-3 rounded-md"
          >
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  );
};