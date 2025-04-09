'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues, submitContactForm } from '@/lib/api/contact';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      privacy: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      const result = await submitContactForm(data);
      setSubmitStatus({
        success: result.success,
        message: result.message,
      });
      
      if (result.success) {
        reset();
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
      <h2 className="text-2xl font-semibold mb-6 text-secondary">Envie-nos uma Mensagem</h2>
      
      {submitStatus.message && (
        <div className={`p-4 rounded-md mb-6 ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="animate-fade-up animate-delay-100">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`w-full px-4 py-2 border ${errors.name ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          
          <div className="animate-fade-up animate-delay-200">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div className="animate-fade-up animate-delay-300">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
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
              {...register('company')}
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
              {...register('subject')}
              className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
            )}
          </div>
          
          <div className="md:col-span-2 animate-fade-up animate-delay-600">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mensagem *
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={6}
              className={`w-full px-4 py-2 border ${errors.message ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>
        </div>
        
        {/* Privacy Policy Checkbox */}
        <div className="mb-6 animate-fade-up animate-delay-700">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacy"
                type="checkbox"
                {...register('privacy')}
                className={`focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded ${errors.privacy ? 'border-red-300' : ''}`}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="privacy" className={`text-gray-700 ${errors.privacy ? 'text-red-500' : ''}`}>
                Li e aceito a <a href="/privacidade" className="text-primary hover:underline">Política de Privacidade</a> *
              </label>
              {errors.privacy && (
                <p className="mt-1 text-sm text-red-600">{errors.privacy.message}</p>
              )}
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-primary text-white rounded-md font-medium shadow-button hover:bg-primary-dark transition-all hover:scale-105 animate-fade-up animate-delay-800 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2 h-4 w-4" />
              A enviar...
            </>
          ) : (
            'Enviar Mensagem'
          )}
        </button>
      </form>
    </div>
  );
}