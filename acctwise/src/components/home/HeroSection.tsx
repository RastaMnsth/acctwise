"use client";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-accent-light via-accent to-primary/10 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-right">AcctWise • Moscavide, Lisboa</span>
            <h1 className="text-4xl md:text-5xl lg:text-heading-1 font-heading font-semibold mb-4 animate-fade-right text-secondary">
              Soluções <span className="text-primary relative whitespace-nowrap">
                Profissionais
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M0,5 C40,0 160,0 200,5" stroke="#4E9F3D" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span> para o Seu Negócio
            </h1>
            <p className="text-lg md:text-xl text-text mb-8 animate-fade-right animate-delay-200">
              Oferecemos serviços de contabilidade, manutenção e consultoria personalizados para empresas e particulares em Moscavide e região de Lisboa.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-right animate-delay-300">
              <Link 
                href="/contacto" 
                className="btn btn-primary shadow-lg shadow-primary/20 px-6 py-3 rounded-md transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/30"
              >
                <span className="flex items-center">
                  Fale Connosco
                  <svg className="w-4 h-4 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="/servicos" 
                className="group px-6 py-3 border-2 border-primary text-primary hover:bg-white/50 rounded-md transition-all hover:translate-y-[-2px]"
              >
                <span className="flex items-center">
                  Os Nossos Serviços
                  <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="relative lg:ml-auto">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full animate-pulse-soft"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full animate-pulse-soft"></div>
            
            {/* Hero image card with modern icons */}
            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-elevated hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-2">
              {/* Placeholder for an actual image in production */}
              <div className="aspect-[4/3] bg-gradient-to-br from-accent-light to-accent rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-heading text-primary/70">AcctWise</span>
                </div>
              </div>
              
              {/* Feature bubbles with modern icons */}
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 animate-fade-left animate-delay-500 transform hover:translate-x-1 transition-transform">
                  <div className="bg-accent p-3 rounded-full transition-transform hover:scale-110 shadow-sm">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M5 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" />
                    </svg>
                  </div>
                  <span className="text-text font-medium">Contabilidade Profissional</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-left animate-delay-600 transform hover:translate-x-1 transition-transform">
                  <div className="bg-accent p-3 rounded-full transition-transform hover:scale-110 shadow-sm">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <span className="text-text font-medium">Serviços de Manutenção</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-left animate-delay-700 transform hover:translate-x-1 transition-transform">
                  <div className="bg-accent p-3 rounded-full transition-transform hover:scale-110 shadow-sm">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-text font-medium">Consultoria Empresarial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};