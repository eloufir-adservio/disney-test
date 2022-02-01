const defaultTheme = require('tailwindcss/defaultTheme')
const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Quicksand',
  'system-ui'
];

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: fontFamily,
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
