/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#E6FCF5',
          100: '#C3F9E2',
          500: '#2F9E44',
          600: '#2F9E44',
          700: '#37B24D',
        },
        blue: {
          500: '#228BE6',
          600: '#228BE6',
          700: '#1C7ED6',
        },
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          500: '#868E96',
          600: '#495057',
          700: '#495057',
          800: '#212529',
          900: '#212529',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'lg': '12px',
        '3xl': '12px',
      },
      spacing: {
        '18': '72px',
        '60': '240px',
      },
      boxShadow: {
        'sm': '0 2px 6px rgba(0,0,0,0.05)',
        'md': '0 4px 8px rgba(0,0,0,0.1)',
      },
      transitionDuration: {
        '200': '200ms',
      }
    },
  },
  plugins: [],
};