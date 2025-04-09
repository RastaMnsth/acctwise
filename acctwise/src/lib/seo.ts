import { Metadata } from 'next';

interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// Base domain for canonical URLs and OG images
const baseDomain = 'https://www.acc-wise.com';

// Default SEO configuration for the website
export const defaultSeoConfig: SeoConfig = {
  title: 'AcctWise | Contabilidade, Manutenção e Consultoria em Moscavide',
  description: 'A AcctWise oferece serviços profissionais de contabilidade, manutenção e consultoria para empresas e particulares em Moscavide e toda a região de Lisboa.',
  keywords: [
    'contabilidade moscavide', 
    'serviços de contabilidade lisboa', 
    'manutenção empresarial', 
    'consultoria financeira', 
    'fiscalidade empresas',
    'relatórios financeiros',
    'acc-wise',
    'acctwise'
  ],
  ogImage: `${baseDomain}/og-image.jpg`,
  canonical: baseDomain,
};

/**
 * Generate metadata for a page with proper SEO configuration
 */
export function generateSeoMetadata(
  config: Partial<SeoConfig> = {}, 
  pathSegment?: string
): Metadata {
  const fullConfig: SeoConfig = {
    ...defaultSeoConfig,
    ...config,
  };
  
  // Generate canonical URL if path segment is provided
  const canonical = pathSegment 
    ? `${baseDomain}/${pathSegment}`.replace(/\/+$/, '')
    : fullConfig.canonical;
  
  return {
    title: fullConfig.title,
    description: fullConfig.description,
    keywords: fullConfig.keywords?.join(', '),
    openGraph: {
      title: fullConfig.title,
      description: fullConfig.description,
      url: canonical,
      siteName: 'AcctWise',
      images: [
        {
          url: fullConfig.ogImage || defaultSeoConfig.ogImage!,
          width: 1200,
          height: 630,
          alt: fullConfig.title,
        },
      ],
      locale: 'pt_PT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullConfig.title,
      description: fullConfig.description,
      images: [fullConfig.ogImage || defaultSeoConfig.ogImage!],
    },
    alternates: {
      canonical: canonical,
    },
    metadataBase: new URL(baseDomain),
  };
}

/**
 * Page-specific SEO configurations
 */
export const pageSeoConfigs: Record<string, Partial<SeoConfig>> = {
  home: {
    // Home page uses default config
  },
  contact: {
    title: 'Contacte-nos | AcctWise - Contabilidade e Consultoria em Moscavide',
    description: 'Entre em contacto com a nossa equipa para solicitar os nossos serviços de contabilidade, manutenção ou consultoria empresarial em Moscavide, Lisboa.',
    keywords: [
      'contactar acctwise', 
      'contabilista moscavide', 
      'serviços contabilidade contacto', 
      'orçamento consultoria financeira',
      'acc-wise contacto'
    ],
  },
  about: {
    title: 'Sobre Nós | AcctWise - A Nossa História e Valores',
    description: 'Conheça a história da AcctWise, os nossos valores, a nossa missão e a nossa equipa de profissionais dedicados aos serviços de contabilidade em Moscavide.',
    keywords: [
      'sobre acctwise', 
      'equipa contabilidade', 
      'valores acctwise', 
      'missão empresa contabilidade',
      'história acctwise'
    ],
  },
  team: {
    title: 'A Nossa Equipa | AcctWise - Profissionais de Contabilidade',
    description: 'Conheça a equipa de profissionais da AcctWise, especialistas em contabilidade, fiscalidade, manutenção e consultoria empresarial em Moscavide, Lisboa.',
    keywords: [
      'equipa acctwise', 
      'contabilistas profissionais', 
      'especialistas fiscalidade', 
      'consultores financeiros moscavide'
    ],
  },
  services: {
    title: 'Serviços | AcctWise - Contabilidade, Manutenção e Consultoria',
    description: 'Oferecemos serviços completos de contabilidade, manutenção, consultoria, fiscalidade e relatórios financeiros para empresas em Moscavide e Lisboa.',
    keywords: [
      'serviços contabilidade', 
      'manutenção empresarial', 
      'consultoria negócios', 
      'fiscalidade empresas',
      'relatórios financeiros'
    ],
  },
  accounting: {
    title: 'Contabilidade | AcctWise - Serviços Contabilísticos em Moscavide',
    description: 'Serviços completos de contabilidade para empresas e particulares, incluindo processamento de salários, lançamentos contabilísticos e muito mais.',
    keywords: [
      'contabilidade empresas', 
      'serviços contabilísticos', 
      'processamento salários', 
      'lançamentos contabilísticos',
      'contabilista moscavide'
    ],
  },
  maintenance: {
    title: 'Manutenção | AcctWise - Serviços de Manutenção Empresarial',
    description: 'Serviços profissionais de manutenção preventiva e corretiva para empresas, garantindo o funcionamento eficiente dos seus equipamentos e sistemas.',
    keywords: [
      'manutenção empresarial', 
      'manutenção preventiva', 
      'manutenção corretiva', 
      'serviços manutenção empresas',
      'manutenção sistemas'
    ],
  },
  consulting: {
    title: 'Consultoria | AcctWise - Consultoria Empresarial e Financeira',
    description: 'Serviços de consultoria empresarial e financeira para otimização de processos, redução de custos e aumento da rentabilidade do seu negócio.',
    keywords: [
      'consultoria empresarial', 
      'consultoria financeira', 
      'otimização processos', 
      'redução custos empresa',
      'aumento rentabilidade'
    ],
  },
  taxation: {
    title: 'Fiscalidade | AcctWise - Serviços Fiscais em Moscavide',
    description: 'Serviços especializados de fiscalidade para empresas e particulares, incluindo planeamento fiscal, declarações fiscais e representação fiscal.',
    keywords: [
      'fiscalidade empresas', 
      'planeamento fiscal', 
      'declarações fiscais', 
      'representação fiscal',
      'consultoria fiscal'
    ],
  },
  reports: {
    title: 'Relatórios Financeiros | AcctWise - Análise e Reporting Financeiro',
    description: 'Serviços de elaboração de relatórios financeiros detalhados, análise de desempenho e reporting financeiro para a sua empresa ou negócio.',
    keywords: [
      'relatórios financeiros', 
      'análise financeira', 
      'reporting empresarial', 
      'análise desempenho financeiro',
      'indicadores financeiros'
    ],
  },
  privacy: {
    title: 'Política de Privacidade | AcctWise',
    description: 'Consulte a nossa política de privacidade para saber como a AcctWise recolhe, utiliza e protege os seus dados pessoais em conformidade com o RGPD.',
    keywords: [
      'política privacidade', 
      'rgpd', 
      'proteção dados', 
      'privacidade acctwise',
      'dados pessoais'
    ],
  },
};