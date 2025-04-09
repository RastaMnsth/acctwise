'use client';

import TestimonialsCarousel from '@/components/shared/TestimonialsCarousel';

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-secondary">
            O Que Dizem Os <span className="text-primary">Nossos Clientes</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Veja o que os nossos clientes dizem sobre os nossos serviços de contabilidade, manutenção e consultoria.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  );
}