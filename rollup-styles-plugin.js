const postcss = require('postcss');
const postcssJs = require('postcss-js');

const path = require('path');
const less = require('less');

const createPlugin = () => {
  const tailwindConfig = require(path.resolve(__dirname, 'tailwind.config.js'));
  tailwindConfig.purge.content = [];
  const process = postcss([
    require('autoprefixer'),
    require('tailwindcss')({
      ...tailwindConfig,
    }),
  ]);

  /**
   * @type {import('rollup').Plugin}
   */
  const plugin = {
    async transform(code, id) {
      if (!/\.(le|c)ss$/.test(id)) return null;

      // https://lesscss.org/usage/#programmatic-usage
      const lessResult = await less.render(code, {
        sourceMap: { sourceMapFileInline: true },
      });
      const postcssResult = await process.process(lessResult.css, {
        map: false,
      });

      // const jsObject = postcssJs.objectify(postcssResult.root);
      // jsObject[':root'] = void 0;
      // return `export default ${JSON.stringify(jsObject)}`;

      return `
      import { insertCss } from '@/shared/styled';
      const css = ${JSON.stringify(postcssResult.css)};
      insertCss(css);
      export default css;
      `;
    },
  };

  return plugin;
};

export default createPlugin;
