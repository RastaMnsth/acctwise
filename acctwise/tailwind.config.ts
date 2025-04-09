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
          DEFAULT: "#4E9F3D", // Fresh green
          light: "#8FBF60",   // Light fresh green
          dark: "#357A2D",    // Darker fresh green
        },
        secondary: {
          DEFAULT: "#3B7080", // Teal blue
          dark: "#2A5561",    // Dark teal
          light: "#4F99AD",   // Light teal
        },
        accent: {
          DEFAULT: "#F0F7EE", // Soft mint/cream
          light: "#F9FDF7",   // Almost white with green tint
          dark: "#D6E9D3",    // Light mint
        },
        text: {
          DEFAULT: "#3A4F41", // Forest green text
          light: "#6E8573",   // Medium green-gray
          lighter: "#A5BBA9", // Light green-gray
        },
        background: {
          DEFAULT: "#FFFFFF",
          alt: "#F7FBF9",     // Very light green tinted background
        },
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
        card: "0 4px 20px rgba(78, 159, 61, 0.08)",
        button: "0 2px 10px rgba(78, 159, 61, 0.15)",
        elevated: "0 10px 30px rgba(78, 159, 61, 0.12)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234E9F3D' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;