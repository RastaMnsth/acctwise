import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F5132",
          light: "#1B8B5A",
          dark: "#0A3C24",
        },
        secondary: "#121212",
        accent: {
          DEFAULT: "#E8F5E9",
          light: "#F6FBF6",
          dark: "#C8E6C9",
        },
        text: "#333333",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
      },
      fontSize: {
        "heading-1": ["3.5rem", { lineHeight: "1.1" }],
        "heading-2": ["2.5rem", { lineHeight: "1.2" }],
        "heading-3": ["2rem", { lineHeight: "1.3" }],
        "heading-4": ["1.5rem", { lineHeight: "1.4" }],
        paragraph: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        button: "0 2px 10px rgba(15, 81, 50, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;