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
        accent: {
          DEFAULT: '#6495ED',
          hover: '#5281D6',
          bright: '#72A0EE',
        },
        canvas: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        surface: {
          light: '#FAFAFA',
          dark: '#0A0A0A',
          elevated: '#111113',
        },
      },
      fontFamily: {
        sans: ['"Geist"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        doto: ['"Doto"', '"Geist Mono"', 'monospace'],
        caveat: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
};
