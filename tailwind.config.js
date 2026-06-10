/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        bg: '#0b0b0b',
        surface: '#111111',
        accent: '#c8f060',
        muted: '#484848',
        border: 'rgba(255,255,255,0.07)',
      },
    },
  },
  plugins: [],
}
