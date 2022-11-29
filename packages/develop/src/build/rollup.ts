import { RollupOptions } from 'rollup';
import * as path from 'path';
import fs from 'fs-extra';
import { exec } from 'child_process';

import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import { createStylesPlugin } from './rollup-styles-plugin';

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
    .filter((cpt) => !['index.tsx', '_styles', '_widgets'].includes(cpt));

  const entries = components.reduce<Record<string, string>>((res, curr) => {
    const p = `components/${curr}/index`;
    res[p] = 'src/' + p;
    return res;
  }, {});

  const config: RollupOptions = {
    context,
    input: {
      ...(isProd ? entries : {}),
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
          { find: 'daisyui-vue', replacement: workspace('src') },
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
      {
        name: 'dtsPlugin',
        buildStart() {
          let cmd = 'tsc -p .';
          if (this.meta.watchMode) {
            cmd += '-w';
          }
          const child = exec(cmd, {
            cwd: context,
          });
          child.on('error', (err) => {
            this.error(err);
          });
        },
      },
      babel({
        extensions,
        babelHelpers: 'bundled',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                chrome: '69',
              },
            },
          ],
          '@babel/preset-typescript',
        ],
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
