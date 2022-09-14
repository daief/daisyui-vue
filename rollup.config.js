import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import cleanup from 'rollup-plugin-cleanup';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';

import {
  createStylesPlugin,
  createDeclarationTransformerFactory,
} from '@dv/plugins';

import path from 'path';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/**
 * @type {import('rollup').RollupOptions}
 */
const componentsConfig = {
  input: {
    index: 'src/index',
    _utils: 'src/shared/utils',
    _global_style: 'src/components/_styles/global',
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
    },
  ],
  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en/#external
  external: ['vue'],
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        {
          find: '@/shared',
          replacement: path.resolve(__dirname, 'src/shared'),
        },
        {
          find: '@styles',
          replacement: path.resolve(__dirname, 'src/_daisyui/src'),
        },
      ],
    }),
    replace({
      preventAssignment: true,
      values: {
        VERSION: JSON.stringify(pkg.version),
      },
    }),
    createStylesPlugin(require('./tailwind.config')),
    resolve({
      extensions,
    }),
    typescript({
      exclude: [path.resolve(__dirname, 'src/_daisyui/**')],
      clean: true,
      check: true, // https://github.com/ezolenko/rollup-plugin-typescript2/issues/214#issuecomment-612647264
      transformers: [
        (ls) => ({
          afterDeclarations: createDeclarationTransformerFactory(
            ls.getProgram(),
          ),
        }),
      ],
    }),
    babel({ extensions, babelHelpers: 'bundled' }),
    cleanup({
      comments: 'all', // keep comments
    }),
  ],
};

export default componentsConfig;
