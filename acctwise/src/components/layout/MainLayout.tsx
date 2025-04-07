"use client";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
      >
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="main-content" className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
};