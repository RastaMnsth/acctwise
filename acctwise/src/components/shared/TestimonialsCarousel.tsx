'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { generatePlaceholderSVG, imageDimensions, placeholderTypes } from '@/utils/image-utils';

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
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const nextTestimonial = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const getPlaceholder = (testimonial: Testimonial) => {
    const { width, height } = imageDimensions.testimonial;
    const initials = testimonial.name
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase();
    return generatePlaceholderSVG(
      width, 
      height, 
      initials, 
      '#E8F5E9', 
      '#0F5132'
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className="relative overflow-hidden bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg">
      {/* Quote background icon */}
      <div className="absolute top-5 left-5 opacity-10">
        <Quote className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute bottom-5 right-5 opacity-10 transform rotate-180">
        <Quote className="w-24 h-24 text-primary" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div 
          className="text-center transition-opacity duration-300"
          key={activeIndex}
        >
          <div className="flex items-center justify-center mb-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mr-4 shadow-sm hover:shadow"
              aria-label="Testemunho anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-accent shadow-lg transition-transform duration-300 hover:scale-105 group">
              {imageErrors[currentTestimonial.id] ? (
                <div 
                  className="absolute inset-0 bg-accent flex items-center justify-center text-xl font-bold text-primary"
                  style={{ backgroundImage: `url('${getPlaceholder(currentTestimonial)}')` }}
                >
                  {currentTestimonial.name.split(' ').map(name => name[0]).join('').toUpperCase()}
                </div>
              ) : (
                <Image 
                  src={currentTestimonial.imageSrc}
                  alt={`Fotografia de ${currentTestimonial.name}`}
                  width={imageDimensions.testimonial.width}
                  height={imageDimensions.testimonial.height}
                  className="object-cover h-full w-full"
                  onError={() => handleImageError(currentTestimonial.id)}
                  priority={activeIndex === 0}
                  sizes="80px"
                />
              )}
              
              {/* Add a hover overlay effect */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ml-4 shadow-sm hover:shadow"
              aria-label="Próximo testemunho"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <blockquote className="mt-4 animate-fade-up">
            <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
              "{currentTestimonial.content}"
            </p>
            <footer className="text-center">
              <div className="font-medium text-lg text-secondary">
                {currentTestimonial.name}
              </div>
              <div className="text-primary font-medium">
                {currentTestimonial.role}, {currentTestimonial.company}
              </div>
            </footer>
          </blockquote>
          
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ver testemunho ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}