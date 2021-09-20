import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import cleanup from 'rollup-plugin-cleanup';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import styles from './rollup-styles-plugin';

import path from 'path';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const componentsConfig = {
  input: {
    index: 'src/index',
    'components/button/index': 'src/components/button/index.tsx',
  },
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
    },
    {
      dir: 'dist/lib',
      format: 'cjs',
      exports: 'auto',
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
    styles(),
    typescript({
      exclude: [path.resolve(__dirname, 'src/_daisyui/**')],
    }),
    resolve({
      extensions,
    }),
    babel({ extensions, babelHelpers: 'bundled' }),
    cleanup({
      comments: 'all', // keep comments
    }),
  ],
};

export default componentsConfig;
