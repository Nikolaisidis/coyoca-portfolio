import { K2D } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        K2D: ['"K2D"', 'sans-serif'],
      },
      backgroundImage: {
        'circle-gradient': 'radial-gradient(circle, rgb(239, 255, 251), rgb(79, 152, 202))',
      },
      boxShadow: {
        'white': '0 1px 20px rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
} satisfies Config;
