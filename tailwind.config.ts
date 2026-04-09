import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F6FF",
          100: "#E0EDFF",
          200: "#C2DBFF",
          300: "#93BFFF",
          400: "#5B9AFF",
          500: "#146EF5",
          600: "#026AD3",
          700: "#0256AD",
          800: "#034589",
          900: "#022E5E",
          950: "#011D3D",
        },
        dark: {
          DEFAULT: "#1a1a2e",
          50: "#F5F5F7",
          100: "#E8E8ED",
          200: "#D1D1DA",
          300: "#A9A9B8",
          400: "#7E7E91",
          500: "#55556A",
          600: "#3D3D52",
          700: "#2D2D42",
          800: "#232338",
          900: "#1a1a2e",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "10px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
      },
      boxShadow: {
        soft: "0 0 45px rgba(0, 0, 0, 0.07)",
        card: "0 2px 20px rgba(0, 0, 0, 0.06)",
        hover: "0 8px 40px rgba(20, 110, 245, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
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
