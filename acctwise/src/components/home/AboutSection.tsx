"use client";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-accent/20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full opacity-60 mix-blend-multiply blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full opacity-60 mix-blend-multiply blur-2xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-xl animate-pulse-soft"></div>
            
            {/* Image container with modern styling */}
            <div className="relative bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-elevated hover:-translate-y-2 transition-all duration-500">
              {/* Placeholder for an actual image in production */}
              <div className="aspect-[4/3] bg-gradient-to-br from-accent-light to-accent rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-heading text-primary/70">Imagem AcctWise</span>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-accent rounded-bl-full"></div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-left">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 animate-fade-left">
              Parceiro de Confiança para o Seu <span className="text-primary relative inline-block">
                Sucesso
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M0,5 C40,0 160,0 200,5" stroke="#2E8B57" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-text mb-8 animate-fade-left animate-delay-100">
              Com mais de 10 anos de experiência, a AcctWise fornece serviços profissionais de alta qualidade em contabilidade, manutenção e consultoria empresarial. A nossa equipa de especialistas está focada em ajudar o seu negócio a crescer e prosperar.
            </p>
            
            {/* Feature list with modern design */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 group animate-fade-left animate-delay-200">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl scale-0 group-hover:scale-100 transition-transform"></div>
                  <div className="relative bg-accent p-3 rounded-xl text-primary flex-shrink-0 transition-transform group-hover:translate-y-[-2px] duration-300">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1 group-hover:text-primary transition-colors">Atendimento Personalizado</h3>
                  <p className="text-text">Cada cliente é único, e adaptamos os nossos serviços às suas necessidades específicas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group animate-fade-left animate-delay-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl scale-0 group-hover:scale-100 transition-transform"></div>
                  <div className="relative bg-accent p-3 rounded-xl text-primary flex-shrink-0 transition-transform group-hover:translate-y-[-2px] duration-300">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1 group-hover:text-primary transition-colors">Expertise Profissional</h3>
                  <p className="text-text">A nossa equipa mantém-se atualizada com as mais recentes alterações fiscais e contabilísticas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group animate-fade-left animate-delay-400">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl scale-0 group-hover:scale-100 transition-transform"></div>
                  <div className="relative bg-accent p-3 rounded-xl text-primary flex-shrink-0 transition-transform group-hover:translate-y-[-2px] duration-300">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1 group-hover:text-primary transition-colors">Compromisso com Resultados</h3>
                  <p className="text-text">Focamo-nos em entregar soluções que realmente beneficiam o crescimento do seu negócio.</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/sobre" 
              className="group inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-lg shadow-primary/10 hover:bg-primary-light hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 animate-fade-left animate-delay-500"
            >
              <span className="mr-2">Conheça-nos Melhor</span>
              <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};