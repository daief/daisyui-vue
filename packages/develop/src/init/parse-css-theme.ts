import postcss from 'postcss';
import pkg from '../../package.json';
const version = pkg.dependencies.daisyui;

import path from 'path';
import fs from 'fs-extra';
// @ts-ignore
import fetch from 'node-fetch';

const ALIAS = {
  '--pf': 'primary-focus',
  '--sf': 'secondary-focus',
  '--af': 'accent-focus',
  '--nf': 'neutral-focus',
  '--in': 'info',
  '--su': 'success',
  '--wa': 'warning',
  '--er': 'error',
  '--inc': 'info-content',
  '--suc': 'success-content',
  '--wac': 'warning-content',
  '--erc': 'error-content',
  '--p': 'primary',
  '--pc': 'primary-content',
  '--s': 'secondary',
  '--sc': 'secondary-content',
  '--a': 'accent',
  '--ac': 'accent-content',
  '--n': 'neutral',
  '--nc': 'neutral-content',
  '--b1': 'base-100',
  '--b2': 'base-200',
  '--b3': 'base-300',
  '--bc': 'base-content',

  '--rounded-box': 'rounded-box',
  '--rounded-btn': 'rounded-btn',
  '--rounded-badge': 'rounded-badge',
  '--animation-btn': 'animation-btn',
  '--animation-input': 'animation-input',
  '--btn-text-case': 'btn-text-case',
  '--btn-focus-scale': 'btn-focus-scale',
  '--border-btn': 'border-btn',
  '--tab-border': 'tab-border',
  '--tab-radius': 'tab-radius',
};

// https://www.postcss.com.cn/docs/writing-a-postcss-plugin
// https://astexplorer.net/
export async function parseCssTheme(context: string) {
  const workspace = (...ps: string[]) => path.resolve(context, ...ps);

  const themeMap: Record<
    string,
    {
      scheme: string;
      rule: Record<string, string>;
    }
  > = {};

  const themeCss = `https://cdn.jsdelivr.net/npm/daisyui@${version}/dist/themes.css`;
  const css = await fetch(themeCss).then((resp: Response) => resp.text());

  await postcss([
    {
      postcssPlugin: 'parse-css-theme',
      Rule(rule) {
        const themeName =
          /^\[data-theme=(\w+)\]$/i.exec(rule.selector)?.[1] || '';
        if (!themeName) {
          console.warn(`[Parse Theme]: theme name not found: ${rule.selector}`);
          return;
        }

        const dels = rule.nodes.filter(
          (node) => node.type === 'decl',
        ) as import('postcss').Declaration[];

        themeMap[themeName] = {
          scheme: '',
          rule: {},
        };

        dels.forEach((del) => {
          del.value = del.value.trim();
          if (del.prop === 'color-scheme') {
            themeMap[themeName].scheme = del.value;
          } else if (del.prop.startsWith('--')) {
            themeMap[themeName].rule[
              // @ts-expect-error
              ALIAS[del.prop] || del.prop
            ] = del.value;
          }
        });
      },
    },
  ]).process(css, { from: undefined });

  let content = `/* this is auto generated. */
import merge from 'deepmerge';
import { ITheme } from '../types/theme';
import { createThemeByVariables } from './internal';
import { DeepPartial } from '../types/utils';
`;

  Object.keys(themeMap).forEach((themeName) => {
    const theme = themeMap[themeName];
    const upperFirsted = themeName[0].toUpperCase() + themeName.slice(1);
    content += `
export const createTheme${upperFirsted} = (theme?: DeepPartial<ITheme>): ITheme => merge(
  createThemeByVariables(${JSON.stringify(themeName)}, {
    scheme: '${theme.scheme}',
    rule: ${JSON.stringify(theme.rule, null, 2)},
  }),
  theme as any || {},
);`;
  });

  await fs.writeFile(workspace('src/shared/theme/themes.ts'), content);

  console.log('[Init]: generate themes done');
}
