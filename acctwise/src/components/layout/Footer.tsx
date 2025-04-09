"use client";
import Link from "next/link";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-tl-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company section */}
          <div className="md:col-span-4 animate-fade-up">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-heading font-bold">
                  <span className="text-primary">Acct</span>
                  <span className="text-white">Wise</span>
                </span>
              </Link>
            </div>
            <p className="text-gray-200 mb-6 max-w-md">
              Serviços profissionais de contabilidade, manutenção e consultoria em Moscavide, Portugal.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn logo with modern styling */}
              <a 
                href="https://www.linkedin.com/company/acctwise" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group bg-white/80 backdrop-blur-sm p-2.5 rounded-lg text-secondary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <LinkedInLogoIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services section */}
          <div className="md:col-span-2 animate-fade-up animate-delay-100">
            <h3 className="text-lg font-semibold mb-4 relative inline-block text-white">
              Serviços
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicos/contabilidade" className="text-gray-200 hover:text-primary transition-all hover:translate-x-1 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contabilidade
                </Link>
              </li>
              <li>
                <Link href="/servicos/fiscalidade" className="text-gray-200 hover:text-primary transition-all hover:translate-x-1 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Fiscalidade
                </Link>
              </li>
              <li>
                <Link href="/servicos/manutencao" className="text-gray-200 hover:text-primary transition-all hover:translate-x-1 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Manutenção
                </Link>
              </li>
              <li>
                <Link href="/servicos/consultoria" className="text-gray-200 hover:text-primary transition-all hover:translate-x-1 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Consultoria
                </Link>
              </li>
              <li>
                <Link href="/servicos/relatorios" className="text-gray-200 hover:text-primary transition-all hover:translate-x-1 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Relatórios
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links section */}
          <div className="md:col-span-2 animate-fade-up animate-delay-200">
            <h3 className="text-lg font-semibold mb-4 relative inline-block text-white">
              Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre" className="text-gray-200 hover:text-primary transition-all hover:translate-x-1 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/equipa" className="text-gray-200 hover:text-primary transition-all hover:translate-x-1 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  A Nossa Equipa
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-200 hover:text-primary transition-all hover:translate-x-1 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contacte-nos
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-200 hover:text-primary transition-all hover:translate-x-1 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact section */}
          <div className="md:col-span-4 animate-fade-up animate-delay-300">
            <h3 className="text-lg font-semibold mb-4 relative inline-block text-white">
              Contacto
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <address className="not-italic text-gray-200 space-y-3">
              <p className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Rua Example, 123<br />
                  2670-000 Moscavide<br />
                  Portugal
                </span>
              </p>
              <p className="flex items-start">
                <PhoneIcon className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+351210000000" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                  +351 210 000 000
                </a>
              </p>
              <p className="flex items-start">
                <EnvelopeIcon className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@acc-wise.com" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                  info@acc-wise.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center animate-fade-up animate-delay-400">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              © {currentYear} AcctWise - Contabilidade, Manutenção e Consultoria, Lda. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-300 hover:text-primary transition-colors">Termos</a>
            <span className="text-gray-500">•</span>
            <a href="/privacidade" className="text-sm text-gray-300 hover:text-primary transition-colors">Privacidade</a>
            <span className="text-gray-500">•</span>
            <a href="/contacto" className="text-sm text-gray-300 hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};