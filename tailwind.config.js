const { hairlineWidth, platformSelect } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        //Common
        'col-secondary': 'EF4444',
        // Light Colors
        'col-primary-light': '#FFFFFF',

        //Dark Colors
        'col-primary-dark': '#10172A',
      },
    },
  },
  plugins: [],
};
