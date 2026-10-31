/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--c-base) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--c-surface) / <alpha-value>)',
          alt: 'rgb(var(--c-surface-alt) / <alpha-value>)',
        },
        line: 'rgb(var(--c-line) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--c-ink) / <alpha-value>)',
          muted: 'rgb(var(--c-ink-muted) / <alpha-value>)',
        },
        accent: {
          blue: '#6C8CFF',
          violet: '#A78BFA',
          pink: '#F472B6',
          teal: '#5EEAD4',
          amber: '#FBBF24',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(108,140,255,0.18), 0 8px 30px -8px rgba(108,140,255,0.35)',
        glowViolet: '0 0 0 1px rgba(167,139,250,0.2), 0 8px 30px -8px rgba(167,139,250,0.4)',
        card: '0 4px 24px -8px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'aurora-dark':
          'radial-gradient(60% 50% at 15% 0%, rgba(108,140,255,0.20) 0%, rgba(108,140,255,0) 60%), radial-gradient(50% 45% at 85% 15%, rgba(167,139,250,0.18) 0%, rgba(167,139,250,0) 60%), radial-gradient(40% 40% at 50% 100%, rgba(244,114,182,0.10) 0%, rgba(244,114,182,0) 60%)',
        'aurora-light':
          'radial-gradient(60% 50% at 15% 0%, rgba(108,140,255,0.12) 0%, rgba(108,140,255,0) 60%), radial-gradient(50% 45% at 85% 15%, rgba(167,139,250,0.10) 0%, rgba(167,139,250,0) 60%), radial-gradient(40% 40% at 50% 100%, rgba(244,114,182,0.07) 0%, rgba(244,114,182,0) 60%)',
        'grad-brand': 'linear-gradient(135deg, #6C8CFF 0%, #A78BFA 55%, #F472B6 100%)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        gradientShift: 'gradientShift 8s ease infinite',
        drift: 'drift 14s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(20px,-30px) scale(1.05)' },
          '66%': { transform: 'translate(-25px,15px) scale(0.97)' },
        },
      },
    },
  },
  plugins: [],
}
