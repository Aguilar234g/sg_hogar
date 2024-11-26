/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#333333',
        accent: '#F5F5F5',
      },
      fontSize: {
        'display-1': ['4rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-2': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-3': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-3': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}