// tailwind.config.js
module.exports = {
  // https://tailwindcss.com/docs/optimizing-for-production
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    content: [
      './src/**/**/*.{vue,js,ts,jsx,tsx}',
      './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: false,
    // styled: false,
    // base: false,
    // utils: false,
    // rtl: false,
  },
};
