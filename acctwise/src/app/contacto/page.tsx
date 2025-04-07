import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto | AcctWise',
  description: 'Entre em contacto com a AcctWise para serviços de contabilidade, fiscalidade e consultoria em Moscavide, Portugal.',
};

export default function ContactoPage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary animate-fade-up">
            Contacte-<span className="text-primary">nos</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Estamos aqui para responder às suas questões e ajudar com os seus desafios contabilísticos e fiscais.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-right">
              <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
                <h2 className="text-2xl font-semibold mb-6 text-secondary">Envie-nos uma Mensagem</h2>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="animate-fade-up animate-delay-100">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div className="animate-fade-up animate-delay-200">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div className="animate-fade-up animate-delay-300">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div className="animate-fade-up animate-delay-400">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div className="md:col-span-2 animate-fade-up animate-delay-500">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div className="md:col-span-2 animate-fade-up animate-delay-600">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Privacy Policy Checkbox */}
                  <div className="mb-6 animate-fade-up animate-delay-700">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          required
                          className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="privacy" className="text-gray-700">
                          Li e aceito a <Link href="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link> *
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white rounded-md font-medium shadow-button hover:bg-primary-dark transition-all hover:scale-105 animate-fade-up animate-delay-800"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="animate-fade-left">
              <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
                <h2 className="text-2xl font-semibold mb-6 text-secondary">Informações de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start animate-fade-left animate-delay-100">
                    <div className="bg-accent p-3 rounded-full mr-4 transition-transform hover:scale-110">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary">O Nosso Escritório</h3>
                      <p className="text-gray-600">Rua Example, 123</p>
                      <p className="text-gray-600">2670-000 Moscavide</p>
                      <p className="text-gray-600">Portugal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-fade-left animate-delay-200">
                    <div className="bg-accent p-3 rounded-full mr-4 transition-transform hover:scale-110">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary">Telefone</h3>
                      <p className="text-gray-600">+351 210 000 000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-fade-left animate-delay-300">
                    <div className="bg-accent p-3 rounded-full mr-4 transition-transform hover:scale-110">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary">Email</h3>
                      <p className="text-gray-600">info@acc-wise.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-fade-left animate-delay-400">
                    <div className="bg-accent p-3 rounded-full mr-4 transition-transform hover:scale-110">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary">Horário de Funcionamento</h3>
                      <p className="text-gray-600">Segunda - Sexta: 9:00 - 18:00</p>
                      <p className="text-gray-600">Fim de semana: Fechado</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-up animate-delay-500">
                  <h3 className="font-medium text-secondary mb-4">Conecte-se Connosco</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/acctwise" 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="bg-accent p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-semibold text-center mb-8 animate-fade-up">Encontre-nos em Moscavide</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center animate-fade-up animate-delay-100 hover-lift">
            <p className="text-gray-500 italic">Mapa do Google será carregado aqui</p>
          </div>
        </div>
      </section>
    </main>
  );
}