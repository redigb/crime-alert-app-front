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
        primary: '#715DF2',       // Púrpura azulado
        danger: '#FF4C4C',        // Rojo de emergencia
        success: '#30C96F',       // Verde suave
        accent: '#5DA6F2',        // Azul eléctrico
        background: '#0E0E10',    // Negro grisáceo moderno
        foreground: '#FFFFFF',    // Blanco puro
        secondary: '#A0A0A0',     // Gris claro
      },
    },
  },
  plugins: [mtConfig],
}

