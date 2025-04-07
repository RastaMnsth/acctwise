"use client";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="bg-accent pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-heading-1 font-heading font-semibold text-secondary mb-4">
              Soluções de <span className="text-primary">Contabilidade</span> para o Seu Negócio
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Oferecemos serviços de contabilidade, fiscalidade e consultoria personalizados para empresas e particulares em Moscavide e região de Lisboa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contacto" 
                className="btn btn-primary px-6 py-3 rounded-md"
              >
                Fale Connosco
              </Link>
              <Link 
                href="/servicos" 
                className="px-6 py-3 border-2 border-primary text-primary hover:bg-accent-dark rounded-md transition-colors"
              >
                Os Nossos Serviços
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-card">
              {/* Placeholder for an actual image in production */}
              <div className="aspect-[4/3] bg-gray-100 rounded relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-heading text-primary">AcctWise</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent p-3 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Contabilidade Profissional</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent p-3 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Consultoria Fiscal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent p-3 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Relatórios Financeiros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};