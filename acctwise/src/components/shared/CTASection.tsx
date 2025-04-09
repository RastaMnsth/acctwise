import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'primary' | 'secondary';
}

export default function CTASection({
  title = 'Pronto para melhorar os seus resultados?',
  subtitle = 'Agende uma consulta gratuita com a nossa equipa de especialistas.',
  buttonText = 'Contacte-nos',
  buttonLink = '/contacto',
  variant = 'primary',
}: CTASectionProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <section className={`py-16 ${isPrimary ? 'bg-primary' : 'bg-accent'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${isPrimary ? 'text-white' : 'text-secondary'}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${isPrimary ? 'text-white opacity-90' : 'text-gray-700'}`}>
            {subtitle}
          </p>
          <Link 
            href={buttonLink}
            className={`inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-medium rounded-md shadow-button transition-all transform hover:scale-105 ${
              isPrimary 
                ? 'bg-white text-primary hover:bg-gray-100' 
                : 'bg-primary text-white hover:bg-primary-dark'
            }`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}