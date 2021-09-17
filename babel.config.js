module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['@babel/preset-typescript'],
    // https://github.com/vuejs/jsx-next
    plugins: [
      // 'babel-plugin-twin',
      // 'babel-plugin-macros',
      '@vue/babel-plugin-jsx',
    ],
  };
};
