/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'xl': '1.25rem', // 20px
        '2xl': '1.875rem', // 30px
      },
      colors: {
        'neon-blue': '#00eaff',
        'neon-cyan': '#00ffd0',
        'neon-purple': '#a259ff',
        'glass-bg': 'rgba(24, 28, 44, 0.7)',
        'glass-border': 'rgba(0,234,255,0.25)',
      },
      boxShadow: {
        'neon': '0 0 16px 2px #00eaff, 0 0 32px 4px #a259ff',
        'glass': '0 4px 32px 0 rgba(0,234,255,0.10)',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0f2027 0%, #2c5364 50%, #a259ff 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
