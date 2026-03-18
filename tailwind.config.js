/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warden: {
          50: '#f0f7f4',
          100: '#d9ede3',
          200: '#b5dbc9',
          300: '#84c2a7',
          400: '#55a583',
          500: '#368a67',
          600: '#276e52',
          700: '#205843',
          800: '#1c4737',
          900: '#183b2e',
          950: '#0c211a',
        },
        claw: {
          50: '#fef6ee',
          100: '#fce9d6',
          200: '#f8d0ad',
          300: '#f3ae79',
          400: '#ed8443',
          500: '#e9651f',
          600: '#da4c15',
          700: '#b53714',
          800: '#902d18',
          900: '#742817',
          950: '#3f120a',
        },
        ink: {
          50: '#f6f6f7',
          100: '#e1e2e5',
          200: '#c3c4ca',
          300: '#9ea0a8',
          400: '#797b85',
          500: '#5f616b',
          600: '#4b4d55',
          700: '#3e3f46',
          800: '#34353a',
          900: '#2d2e32',
          950: '#1a1a1e',
        },
      },
      fontFamily: {
        display: ['"Noto Serif SC"', '"Source Serif 4"', 'Georgia', 'serif'],
        body: ['"Noto Sans SC"', '"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: 'var(--tw-prose-body)',
            a: {
              color: '#368a67',
              textDecoration: 'underline',
              textDecorationColor: '#b5dbc9',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: '#276e52',
                textDecorationColor: '#368a67',
              },
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: {
              backgroundColor: '#f6f6f7',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
