import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',

  plugins: [require('tailwind-highlightjs'), require('@tailwindcss/aspect-ratio'),],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  theme: {
    extend: {
      colors: {
        'olive': {
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999',
          400: '#888',
          500: '#666',
          600: '#444',
          700: '#333',
          800: '#222',
          900: '#111',
        },
      },
    },
    hljs: {
      theme: 'github-dark',
    },
  },

}
export default config
