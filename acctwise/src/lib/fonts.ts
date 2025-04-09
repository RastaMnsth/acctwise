import { Playfair_Display, Inter } from "next/font/google";
import localFont from "next/font/local";

// System font stack that prioritizes SF Pro on Apple devices
export const sfPro = localFont({
  src: [
    // These paths are placeholders as we're using system fonts
    // This configuration lets Next.js know we're using local fonts
    {
      path: '../fonts/system-font.woff2', // This file doesn't actually need to exist
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-sf-pro',
  display: 'swap',
  preload: true,
  fallback: [
    '-apple-system', 
    'BlinkMacSystemFont', 
    'SF Pro Text', 
    'SF Pro Display', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'sans-serif'
  ],
});

// Inter for body text (with better performance than system fonts)
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  weight: ['400', '500', '600', '700'],
});

// Keep Playfair for accent/display text if needed
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
  weight: ['400', '500', '600', '700'],
});

/**
 * Font loading optimization settings
 */
export const fontOptimization = {
  // When adding to CSS, use like this:
  // font-family: var(--font-sf-pro);
  // font-family: var(--font-playfair);
  
  // Font CSS Variables
  variables: [sfPro.variable, playfair.variable, inter.variable].join(' '),
  
  // Font classes for body and headings
  className: {
    body: inter.className,
    heading: playfair.className,
  },
  
  // Font display settings object
  settings: {
    display: 'swap', // Ensures text remains visible during font loading
    fallback: sfPro.style.fontFamily,
  }
};