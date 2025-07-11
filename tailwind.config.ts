// tailwind.config.ts
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        papel: "#F5F2E8",
        tinta: "#2C2416",
        sepia: {
          50: "#FAF8F3",
          100: "#F5F2E8",
          200: "#E6DFC8",
          300: "#D7CCA8",
          400: "#C8B988",
          500: "#B9A668",
          600: "#94844E",
          700: "#6F633A",
          800: "#4A4227",
          900: "#252113",
        },
      },
      fontFamily: {
        serif: ["Crimson Text", "Georgia", "serif"],
        handwritten: ["Caveat", "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "paper-flip": "paperFlip 0.6s ease-in-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
