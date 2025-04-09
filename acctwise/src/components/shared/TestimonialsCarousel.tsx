'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Testimonial data interface
interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  imageSrc: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'João Silva',
    company: 'Silva & Associados',
    role: 'Diretor Geral',
    content: 'A AcctWise ajudou-nos a reorganizar completamente a nossa contabilidade. Graças ao seu apoio, conseguimos reduzir custos e otimizar os nossos processos financeiros. Recomendo vivamente os seus serviços profissionais e dedicados.',
    imageSrc: '/testimonials/testimonial-1.jpg', // Placeholder, needs actual image
  },
  {
    id: 2,
    name: 'Ana Martins',
    company: 'Café Florescer',
    role: 'Proprietária',
    content: 'Como proprietária de um pequeno negócio, estava preocupada com a gestão fiscal. A equipa da AcctWise não só simplificou todo o processo, como também me ajudou a encontrar deduções fiscais que eu desconhecia. O serviço personalizado que oferecem é inestimável.',
    imageSrc: '/testimonials/testimonial-2.jpg', // Placeholder, needs actual image
  },
  {
    id: 3,
    name: 'Carlos Mendes',
    company: 'TechSolutions Portugal',
    role: 'CEO',
    content: 'Trabalhar com a AcctWise transformou a nossa abordagem à manutenção de equipamentos e sistemas. A sua equipa técnica é extremamente competente, e o nível de serviço excedeu todas as nossas expectativas. É uma parceria que pretendemos manter por muitos anos.',
    imageSrc: '/testimonials/testimonial-3.jpg', // Placeholder, needs actual image
  },
  {
    id: 4,
    name: 'Marta Carvalho',
    company: 'Clínica Saúde Total',
    role: 'Diretora Administrativa',
    content: 'Os serviços de consultoria prestados pela AcctWise foram fundamentais para o crescimento da nossa clínica. As suas análises detalhadas e recomendações estratégicas ajudaram-nos a tomar decisões informadas que impulsionaram o nosso negócio.',
    imageSrc: '/testimonials/testimonial-4.jpg', // Placeholder, needs actual image
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <div className="relative overflow-hidden bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg">
      <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
        <Quote className="w-full h-full text-primary" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mr-4"
              aria-label="Testemunho anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Foto</span>
              </div>
              {/* Image will be added when available */}
              {/* <Image 
                src={testimonials[activeIndex].imageSrc}
                alt={testimonials[activeIndex].name}
                fill
                className="object-cover"
              /> */}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ml-4"
              aria-label="Próximo testemunho"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <blockquote className="mt-4">
            <p className="text-lg md:text-xl text-gray-700 italic mb-6">
              "{testimonials[activeIndex].content}"
            </p>
            <footer className="text-center">
              <div className="font-medium text-lg text-secondary">
                {testimonials[activeIndex].name}
              </div>
              <div className="text-primary font-medium">
                {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
              </div>
            </footer>
          </blockquote>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Ver testemunho ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}