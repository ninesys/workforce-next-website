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
          50: "#EEF2FF",
          100: "#DDE4FF",
          200: "#B3C1FF",
          300: "#8099FF",
          400: "#4D6BFF",
          500: "#1B3A8C",
          600: "#152E6E",
          700: "#0F2252",
          800: "#0A1737",
          900: "#060D1F",
          950: "#030713",
        },
        accent: {
          50: "#EFF8FF",
          100: "#DAEEFF",
          200: "#BDE0FF",
          300: "#8ACEFF",
          400: "#4FB4FF",
          500: "#2196F3",
          600: "#0B79D0",
          700: "#0960A8",
          800: "#0D5089",
          900: "#104271",
        },
        success: {
          50: "#F0FDFA",
          500: "#0D9488",
          600: "#0F766E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
