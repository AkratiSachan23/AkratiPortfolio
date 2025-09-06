/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#0F0F0F',
          800: '#1A1A1A',
          700: '#2A2A2A',
        },
        cyan: {
          400: '#00F5FF',
          500: '#00E5FF',
        },
        purple: {
          400: '#A855F7',
          500: '#8B5CF6',
        },
        orange: {
          400: '#FF8A65',
          500: '#FF6B35',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-orange': '0 0 20px rgba(255, 107, 53, 0.5)',
      },
    },
  },
  plugins: [],
};