/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#FFFFFF',
        ink: '#111111',
        muted: '#777777',
        faint: '#EEEEEE',
        accent: '#A78BFA',
        'accent-dim': '#7C3AED',
      },
      fontSize: {
        'display': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-sm': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.025em', fontWeight: '800' }],
        'heading': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'subheading': ['clamp(1.1rem, 2vw, 1.4rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'label': ['0.7rem', { lineHeight: '1', letterSpacing: '0.12em', fontWeight: '600' }],
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 9rem)',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}
