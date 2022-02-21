module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/**/*.{js,jsx}'
    ],
  theme: {
    extend: {
      colors: {
        'shadow': 'rgba(0, 0, 0, 0.536)'
      },
      maxWidth: { 
        '6/7': '90%',
    },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}