// tailwind.config.js
module.exports = {
  // purge: {
  //   // enabled: true,
  //   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html,md}'],
  //   options: {
  //     safelist: [/data-theme$/],
  //   },
  // },
  // darkMode: false, // or 'media' or 'class'
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html,md}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')], // 引用一些基本样式
  daisyui: {
    logs: false,
  },
};
