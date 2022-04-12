module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5.5rem',
        '3xl': '6.5rem',
      },
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'Roboto'],
      },
      backgroundImage: {
        error: "url('/src/assests/error-bg.png')",
      },
      colors: {
        primary: '#191D21',
        secondary: '#2F343A',
        cta: '#B2DB5B',
        'brand-text': '#FC6011',
        rating: '#FFFF00',
        'fb-blue': '#367FC0',
        'fb-blue-dark': '#135A9A',
        'google-red-dark': '#A81402',
        'google-red': '#DD4B39',
        border: '#FEBD00',
        'cta-dark': '#8FCE0B',
      },
    },
  },
  plugins: [],
};
