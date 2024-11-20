/** @type {import('tailwindcss').Config} */
module.exports = {
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
        custom1: "#D39700",
        custom2: "#8A8A8A",
        custom3: "#555555"
      },
      fontWeight: {
        'extra-light': '600',
        'light': '400',
        'mid' : '500'
      },
      fontFamily: {
        Manrope: ['Manrope', 'Arial', 'sans-serif'],
        Mulish: ['Mulish', 'Arial', 'sans-serif' ],
        Inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
};