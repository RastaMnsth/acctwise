import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";

export const metadata: Metadata = {
  title: "AcctWise | Contabilidade, Consultoria e Manutenção",
  description: "Serviços profissionais de contabilidade e consultoria em Moscavide, Portugal. Soluções personalizadas para empresas e particulares.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      {/* More sections can be added here as they are developed */}
    </>
  );
}
