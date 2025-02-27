/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C45BE',
        secondary: '#1A1B4B',
        'light-gray': '#F8F9FB',
        'text-gray': '#6C757D',
        success: '#28A745',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'title': ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
} 