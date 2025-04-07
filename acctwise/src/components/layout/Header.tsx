"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
    { title: "Contacto", href: "/contacto" },
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-heading font-bold text-primary">
              AcctWise
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href 
                    ? "text-primary" 
                    : isScrolled 
                      ? "text-secondary" 
                      : "text-white font-semibold"
                }`}
              >
                {link.title}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/contacto" 
              className="btn btn-primary px-4 py-2 text-sm font-medium"
            >
              Fale Connosco
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden p-2 ${isScrolled ? "text-secondary" : "text-white"}`}
            onClick={handleToggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? "text-primary" : "text-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link 
                href="/contacto" 
                className="btn btn-primary px-4 py-2 text-sm font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Connosco
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};