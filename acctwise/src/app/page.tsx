import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/shared/CTASection";
import { generateSeoMetadata, pageSeoConfigs } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata(pageSeoConfigs.home);

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection 
        title="Preparado para impulsionar o seu negócio?"
        subtitle="A AcctWise oferece soluções personalizadas de contabilidade, manutenção e consultoria para empresas de todos os tamanhos."
        buttonText="Solicite uma proposta"
      />
    </>
  );
}
