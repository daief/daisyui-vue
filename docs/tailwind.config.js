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
  // plugins: [require('daisyui')], // 直接引用 daisyui 源码样式
  // daisyui: {
  //   logs: false,
  // },
};
