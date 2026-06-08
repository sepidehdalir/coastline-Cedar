import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F0',
        bone: '#F4EEE3',
        cedar: {
          50: '#FAF3E8',
          100: '#F0E2C9',
          200: '#DFC196',
          300: '#C99A5F',
          400: '#B07640',
          500: '#8C5A30',
          600: '#6E4525',
          700: '#523320',
          800: '#3A241A',
          900: '#241712'
        },
        forest: {
          400: '#5C7A5E',
          500: '#3E5A40',
          600: '#2D4530',
          700: '#1F3022'
        },
        charcoal: {
          800: '#26201B',
          900: '#1A1612'
        }
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif']
      },
      maxWidth: { '8xl': '88rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(36,23,18,.04), 0 8px 24px rgba(36,23,18,.06)',
        lift: '0 2px 4px rgba(36,23,18,.06), 0 16px 40px rgba(36,23,18,.10)'
      }
    }
  },
  plugins: []
};
export default config;
