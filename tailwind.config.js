/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#0B0B0C',
          dark: '#0D0D0E',
          surface: '#161618',
          card: '#161618',
          subtle: '#1f1f22',
        },
        border: {
          subtle: '#27272A',
          hover: '#3F3F46',
          gold: 'rgba(229, 195, 150, 0.3)',
        },
        gold: {
          DEFAULT: '#E5C396',
          hover: '#D4A373',
          light: '#F3E5D0',
          dark: '#B88E56',
          glow: 'rgba(229, 195, 150, 0.15)',
        },
        text: {
          main: '#FFFFFF',
          muted: '#A1A1AA',
          dim: '#71717A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

