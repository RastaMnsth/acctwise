import { Playfair_Display } from "next/font/google";
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

// Keep Playfair for accent/display text if needed
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// CSS variables can be used like this:
// font-family: var(--font-sf-pro);
// font-family: var(--font-playfair);