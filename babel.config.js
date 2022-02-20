module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['@babel/preset-typescript'],
    // https://github.com/vuejs/jsx-next
    plugins: ['@vue/babel-plugin-jsx'],
  };
};
