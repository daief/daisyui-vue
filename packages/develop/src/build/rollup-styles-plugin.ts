import { Plugin } from 'rollup';

const postcss = require('postcss');
// const postcssJs = require('postcss-js');
const less = require('less');

export const createStylesPlugin = (tailwindConfig: any) => {
  tailwindConfig = { ...tailwindConfig };
  tailwindConfig.content = [];
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

  const uid = (() => {
    let i = 0;
    return () => ++i;
  })();

  const plugin: Plugin = {
    name: 'rollup-styles-plugin',
    async transform(code, id) {
      if (!/\.(le|c)ss$/.test(id)) return null;

      let cssCode = code;

      if (/\.less/i.test(id)) {
        // https://lesscss.org/usage/#programmatic-usage
        const lessResult = await less.render(code, {
          sourceMap: { sourceMapFileInline: false },
        });
        cssCode = lessResult.css;
      }

      const postcssResult = await process.process(cssCode, {
        map: false,
      });

      // css 2 js
      // const jsObject = postcssJs.objectify(postcssResult.root);
      // jsObject[':root'] = void 0;
      // return `export default ${JSON.stringify(jsObject)}`;

      return `
      const css = ${JSON.stringify(postcssResult.css)};
      export default {
        css,
        id: ${uid()},
      };
      `;
    },
  };

  return plugin;
};
