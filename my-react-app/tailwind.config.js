/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgb(var(--border))",
        ring: "rgb(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
      },
      animation: {
        'orbit': 'orbit calc(var(--duration)*1s) linear infinite',
        'shine': 'shine var(--duration) infinite linear',
      },
      keyframes: {
        orbit: {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))',
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))',
          },
        },
        shine: {
          '0%': {
            backgroundPosition: '0% 0%',
          },
          '50%': {
            backgroundPosition: '100% 100%',
          },
          '100%': {
            backgroundPosition: '0% 0%',
          },
        },
      },
    },
  },
  plugins: [],
}