const postcss = require('postcss');
// const postcssJs = require('postcss-js');

const path = require('path');
const less = require('less');

const createPlugin = () => {
  const tailwindConfig = require(path.resolve(__dirname, 'tailwind.config.js'));
  tailwindConfig.purge.content = [];
  const process = postcss([
    require('tailwindcss')({
      ...tailwindConfig,
    }),
    require('postcss-nested')({
      bubble: ['screen'],
    }),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          mergeRules: false,
        },
      ],
    }),
  ]);

  /**
   * @type {import('rollup').Plugin}
   */
  const plugin = {
    async transform(code, id) {
      if (!/\.(le|c)ss$/.test(id)) return null;

      let cssCode = code;

      if (/\.less/i.test(id)) {
        // https://lesscss.org/usage/#programmatic-usage
        const lessResult = await less.render(code, {
          sourceMap: { sourceMapFileInline: true },
        });
        cssCode = lessResult.css;
      }

      const postcssResult = await process.process(cssCode, {
        map: false,
      });

      // const jsObject = postcssJs.objectify(postcssResult.root);
      // jsObject[':root'] = void 0;
      // return `export default ${JSON.stringify(jsObject)}`;

      // TODO
      // 1、分离样式文件
      // 2、压缩样式
      // 3、整包样式

      return `
      const css = ${JSON.stringify(postcssResult.css)};
      export default css;
      `;
    },
  };

  return plugin;
};

export default createPlugin;
