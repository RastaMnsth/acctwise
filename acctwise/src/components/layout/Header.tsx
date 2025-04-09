"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const handleToggleMenu = () => setIsMenuOpen(prev => !prev);
  
  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(false);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Navigation links in Portuguese
  const navLinks = [
    { title: "Início", href: "/" },
    { title: "Sobre Nós", href: "/sobre" },
    { title: "Serviços", href: "/servicos" },
    { title: "Equipa", href: "/equipa" },
    { title: "Contacto", href: "/contacto" },
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center group">
            <span className="text-xl md:text-2xl font-heading font-bold text-primary group-hover:text-primary-light transition-colors duration-300">
              Acct<span className={`${isScrolled ? 'text-secondary' : 'text-white'} group-hover:text-primary-light transition-colors duration-300`}>Wise</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all hover:text-primary ${
                  pathname === link.href 
                    ? "text-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-primary after:rounded-full" 
                    : isScrolled 
                      ? "text-text" 
                      : "text-white"
                }`}
              >
                {link.title}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/contacto" 
              className={`ml-4 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 shadow-md ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:-translate-y-1"
                  : "bg-white/90 text-primary hover:bg-white hover:text-primary-dark hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              <span className="flex items-center">
                Fale Connosco
                <EnvelopeIcon className="w-4 h-4 ml-1.5" />
              </span>
            </Link>
          </nav>
          
          {/* Mobile Menu Button - Updated with cleaner toggle animation */}
          <button
            type="button"
            className={`md:hidden relative z-10 p-2 rounded-md ${
              isScrolled ? "text-text" : "text-white"
            } ${isMenuOpen && "text-primary"}`}
            onClick={handleToggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between overflow-hidden">
              <span className={`w-6 h-0.5 transform transition-all duration-300 ${
                isMenuOpen 
                  ? "translate-y-2 rotate-45 bg-primary" 
                  : isScrolled ? "bg-text" : "bg-white"
              }`}></span>
              <span className={`w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen 
                  ? "opacity-0 translate-x-2 bg-primary"
                  : isScrolled ? "bg-text" : "bg-white"
              }`}></span>
              <span className={`w-6 h-0.5 transform transition-all duration-300 ${
                isMenuOpen 
                  ? "-translate-y-2 -rotate-45 bg-primary" 
                  : isScrolled ? "bg-text" : "bg-white"
              }`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu - With updated icons */}
        <div
          className={`fixed inset-0 bg-accent/95 backdrop-blur-md transition-all duration-500 z-0 md:hidden ${
            isMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? "text-primary" : "text-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              
              {/* CTA Button with modern icon */}
              <Link 
                href="/contacto" 
                className="mt-4 mx-auto px-6 py-3 bg-primary text-white rounded-lg text-center shadow-md hover:bg-primary-light hover:shadow-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-center">
                  Fale Connosco
                  <EnvelopeIcon className="w-4 h-4 ml-1.5" />
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};