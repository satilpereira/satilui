import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        electric: {
          100: '#e3cffd',
          200: '#c89ffc',
          300: '#ac70fa',
          400: '#9140f9',
          500: '#7510f7',
          600: '#5e0dc6',
          700: '#460a94',
          800: '#2f0663',
          900: '#170331',
        },
        darkindigo: {
          100: '#d0cedb',
          200: '#a19db7',
          300: '#726d93',
          400: '#433c6f',
          500: '#140b4b',
          600: '#10093c',
          700: '#0c072d',
          800: '#08041e',
          900: '#04020f',
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        main: 'auto 1fr',
      },
    },
  },
  plugins: [],
};
export default config;
