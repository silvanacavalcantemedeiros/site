/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        floral: {
          50: '#fff5f7',
          100: '#ffe4e9',
          200: '#fecdd8',
          300: '#fda4ba',
          400: '#fb7193',
          500: '#f43f70',
          600: '#e11d57',
          700: '#be1247',
          800: '#9f123f',
          900: '#84143a',
          950: '#4b051c',
        },
        cream: {
          50: '#fdfbf7',
          100: '#fbf7ee',
          200: '#f7edd8',
          300: '#f1dec0',
          400: '#e7c695',
          500: '#dcab6d',
        },
        sage: {
          50: '#f4f8f5',
          100: '#e5f0e8',
          200: '#cce2d2',
          300: '#a3ccb0',
          400: '#73b087',
          500: '#4e9365',
          600: '#3a764e',
          700: '#2f5e3f',
        },
        brand: {
          natura: {
            DEFAULT: '#F26522',
            dark: '#C84607',
            light: '#FFF3ED',
            accent: '#FA824C'
          },
          avon: {
            DEFAULT: '#D80064',
            dark: '#A6004D',
            light: '#FFF0F5',
            accent: '#FF2A85'
          },
          jequiti: {
            DEFAULT: '#7B1FA2',
            dark: '#4A148C',
            light: '#F8EEFC',
            accent: '#9C27B0'
          },
          whatsapp: '#25D366'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'floral-pattern': "radial-gradient(#fecdd8 0.75px, transparent 0.75px), radial-gradient(#fda4ba 0.75px, #fff5f7 0.75px)",
      },
      boxShadow: {
        'floral': '0 10px 30px -10px rgba(225, 29, 87, 0.15)',
        'floral-lg': '0 20px 40px -15px rgba(225, 29, 87, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
