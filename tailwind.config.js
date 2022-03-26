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
        'shadow': 'rgba(0, 0, 0, 0.536)',
        'primary': 'rgb(230, 239, 255)',
        'light': 'rgb(237, 246, 250)',
        'dark': 'rgb(31, 21, 21)',
      },
      maxWidth: { 
        '1/4': '35%',
        '6/7': '90%',
    },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],

}