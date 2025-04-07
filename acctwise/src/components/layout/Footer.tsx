"use client";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">AcctWise</h3>
            <p className="text-gray-300 mb-4">
              Serviços profissionais de contabilidade, consultoria e manutenção em Moscavide, Portugal.
            </p>
            <div className="flex space-x-3">
              {/* LinkedIn logo */}
              <a 
                href="https://www.linkedin.com/company/acctwise" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white p-2 rounded-full text-primary hover:bg-accent hover:text-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              {/* Portal das Reclamações logo - This would be an actual image in production */}
              <a 
                href="https://www.livroreclamacoes.pt" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portal das Reclamações"
                className="bg-white p-2 rounded-full hover:bg-accent transition-colors"
              >
                <div className="w-5 h-5 bg-[#FAC73F] rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold">PR</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Services section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/contabilidade" className="text-gray-300 hover:text-white transition-colors">
                  Contabilidade
                </Link>
              </li>
              <li>
                <Link href="/servicos/fiscalidade" className="text-gray-300 hover:text-white transition-colors">
                  Fiscalidade
                </Link>
              </li>
              <li>
                <Link href="/servicos/consultoria" className="text-gray-300 hover:text-white transition-colors">
                  Consultoria
                </Link>
              </li>
              <li>
                <Link href="/servicos/relatorios" className="text-gray-300 hover:text-white transition-colors">
                  Relatórios Financeiros
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/equipa" className="text-gray-300 hover:text-white transition-colors">
                  A Nossa Equipa
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacte-nos
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-300 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Rua Example, 123</p>
              <p className="mb-2">2670-000 Moscavide</p>
              <p className="mb-2">Portugal</p>
              <p className="mb-2">
                <a href="tel:+351210000000" className="hover:text-white transition-colors">
                  +351 210 000 000
                </a>
              </p>
              <p>
                <a href="mailto:info@acc-wise.com" className="hover:text-white transition-colors">
                  info@acc-wise.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} AcctWise - Contabilidade, Consultoria e Manutenção, Lda. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              {/* Placeholder for Portal das Reclamações horizontal logo */}
              <div className="bg-[#FAC73F] h-8 px-3 rounded flex items-center">
                <span className="text-xs font-bold text-black">Portal das Reclamações</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};