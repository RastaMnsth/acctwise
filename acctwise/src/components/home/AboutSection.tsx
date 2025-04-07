"use client";
import Link from "next/link";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-accent-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-xl animate-pulse-soft"></div>
            <div className="relative bg-white p-4 md:p-8 rounded-lg shadow-card hover-lift">
              {/* Placeholder for an actual image in production */}
              <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-heading text-primary">Imagem AcctWise</span>
                </div>
              </div>
              
              {/* Removing company stats (experience and customers) as requested */}
            </div>
          </div>
          
          <div className="animate-fade-left">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-secondary mb-6">
              Sobre a <span className="text-primary">AcctWise</span>
            </h2>
            <p className="text-gray-600 mb-4 animate-fade-left animate-delay-100">
              A AcctWise é uma empresa de contabilidade e consultoria dedicada a fornecer soluções financeiras personalizadas para empresas e particulares em Moscavide e na região de Lisboa.
            </p>
            <p className="text-gray-600 mb-6 animate-fade-left animate-delay-200">
              Com uma equipa experiente liderada por Isabel Cardante, oferecemos serviços profissionais que vão além da contabilidade tradicional, ajudando os nossos clientes a tomar decisões financeiras informadas e estratégicas.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 animate-fade-left animate-delay-300">
                <div className="bg-accent p-3 rounded-full text-primary flex-shrink-0 transition-transform hover:scale-110 duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1">Atendimento Personalizado</h3>
                  <p className="text-gray-600">Cada cliente é único, e adaptamos os nossos serviços às suas necessidades específicas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-fade-left animate-delay-400">
                <div className="bg-accent p-3 rounded-full text-primary flex-shrink-0 transition-transform hover:scale-110 duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1">Expertise Profissional</h3>
                  <p className="text-gray-600">A nossa equipa mantém-se atualizada com as mais recentes alterações fiscais e contabilísticas.</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/sobre" 
              className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center group transition-all hover:scale-105 animate-fade-left animate-delay-500"
            >
              Conheça-nos Melhor
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};