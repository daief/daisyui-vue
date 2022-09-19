import { RollupOptions } from 'rollup';
import * as path from 'path';

import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import cleanup from 'rollup-plugin-cleanup';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import { createStylesPlugin } from './rollup-styles-plugin';
import { createDeclarationTransformerFactory } from './ts-declaration-transformer';

interface IBuildOptions {
  context: string;
}

export function getRoolupConfig(opts: IBuildOptions) {
  const { context } = opts;

  const extensions = ['.js', '.jsx', '.ts', '.tsx'];
  const workspace = (...ps: string[]) => path.resolve(context, ...ps);
  const pkg = require(workspace('package.json'));

  const config: RollupOptions = {
    context,
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
    external: ['vue', '@vicons/ionicons5'],
    plugins: [
      alias({
        entries: [
          { find: '@', replacement: workspace('src') },
          {
            find: '@/shared',
            replacement: workspace('src/shared'),
          },
          {
            find: '@styles',
            replacement: workspace('src/_daisyui/src'),
          },
        ],
      }),
      replace({
        preventAssignment: true,
        values: {
          VERSION: JSON.stringify(pkg.version),
        },
      }),
      createStylesPlugin(require(workspace('tailwind.config'))),
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
              ls.getProgram()!,
            ) as any,
          }),
        ],
      }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        // presets: ['@babel/preset-typescript'],
        // https://github.com/vuejs/jsx-next
        plugins: ['@vue/babel-plugin-jsx'],
      }),
      cleanup({
        comments: 'all', // keep comments
      }),
    ],
  };

  return config;
}
