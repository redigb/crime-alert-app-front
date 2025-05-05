/** @type {import('tailwindcss').Config} */
import { mtConfig } from "@material-tailwind/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B13",
        card: "#141421",
        primary: "#3F37C9",
        primaryHover: "#4B47E0",
        alert: "#EF4444",
        success: "#22C55E",
        accent: "#7C3AED",
        accentLight: "#A78BFA",
        textSecondary: "#A0A0B0",

        danger: "#FF4C4C",

        background_2: "#0E0E10",
        border_color: "#1f1f22",
      },
      animation: {
        'gradient-slow': 'gradientMove 6s ease infinite',
      },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [mtConfig],
}

