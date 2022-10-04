import { RollupOptions } from 'rollup';
import * as path from 'path';
import fs from 'fs-extra';

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
  const isProd = process.env.NODE_ENV === 'production';

  const extensions = ['.js', '.jsx', '.ts', '.tsx'];
  const workspace = (...ps: string[]) => path.resolve(context, ...ps);
  const pkg = require(workspace('package.json'));

  const components = fs
    .readdirSync(workspace('src/components'))
    .filter((cpt) => !['index.tsx', '_styles'].includes(cpt));

  const entries = components.reduce<Record<string, string>>((res, curr) => {
    const p = `components/${curr}/index`;
    res[p] = 'src/' + p;
    return res;
  }, {});

  const config: RollupOptions = {
    context,
    input: {
      ...(isProd
        ? {
            ...entries,
            'icons/index': 'src/icons/index',
          }
        : {}),
      _utils: 'src/shared/utils',
      _global_style: 'src/components/_styles/global',
      index: 'src/index',
    },
    output: [
      {
        dir: 'dist',
        format: 'esm',
      },
    ],
    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en/#external
    external: ['vue', '@vicons/ionicons5', '@popperjs/core'],
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
      isProd &&
        typescript({
          exclude: [path.resolve(__dirname, 'src/_daisyui/**')],
          clean: isProd,
          check: true,
          transformers: [
            (ls) => ({
              afterDeclarations: createDeclarationTransformerFactory(
                ls.getProgram()!,
              ) as any,
            }),
          ],
          tsconfigOverride: {
            compilerOptions: {
              emitDeclarationOnly: true,
            },
          },
        }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        presets: ['@babel/preset-typescript'],
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