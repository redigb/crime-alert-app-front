/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
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
      },
    },
  },
  plugins: [],
}

