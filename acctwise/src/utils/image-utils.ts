/**
 * Image utility functions for optimizing and managing images
 */

/**
 * Get responsive image sizes based on viewport breakpoints
 * Used for Next.js Image component's sizes prop
 */
export function getResponsiveImageSizes(config: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  default?: string;
} = {}): string {
  const sizes = {
    mobile: config.mobile || '100vw',
    tablet: config.tablet || '50vw',
    desktop: config.desktop || '33vw',
    default: config.default || '100vw',
  };

  return `
    (max-width: 640px) ${sizes.mobile},
    (max-width: 1024px) ${sizes.tablet},
    ${sizes.desktop}
  `.trim();
}

/**
 * Generate a photo placeholder SVG
 * Used for fallback when actual images aren't available
 */
export function generatePlaceholderSVG(
  width: number,
  height: number,
  text: string,
  bgColor: string = '#f5f5f5',
  textColor: string = '#666666'
): string {
  // Ensure text is safely escaped for SVG
  const safeText = text.replace(/[<>&"']/g, (char) => {
    switch (char) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case "'": return '&apos;';
      default: return char;
    }
  });

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${bgColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${Math.max(12, Math.floor(width / 20))}" fill="${textColor}">${safeText}</text></svg>`;
}

/**
 * Get image dimensions for common layouts
 */
export const imageDimensions = {
  teamMember: {
    width: 400,
    height: 500,
    aspect: 0.8,
  },
  testimonial: {
    width: 80,
    height: 80,
    aspect: 1,
  },
  service: {
    width: 600,
    height: 400,
    aspect: 1.5,
  },
  hero: {
    width: 1200,
    height: 800,
    aspect: 1.5,
  },
  openGraph: {
    width: 1200,
    height: 630,
    aspect: 1.91,
  },
};

/**
 * Types of placeholder content 
 * For consistent fallback images before actual assets are available
 */
export const placeholderTypes = {
  teamMember: 'Foto de Membro da Equipa',
  testimonial: 'Foto de Cliente',
  service: 'Imagem do Serviço',
  hero: 'Imagem Principal',
  openGraph: 'AcctWise',
  generic: 'Imagem em Carregamento',
};