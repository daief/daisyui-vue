import {
  clsUniquePrefix,
  createClassnamePlugin,
  createPostcssModulesOptions,
} from '../src/build/classname-plugin';
import postcss from 'postcss';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as prettier from 'prettier';
import * as postcssModules from 'postcss-modules';

describe('classname-plugin', () => {
  it('postcss', async () => {
    const compile = (code: string) =>
      postcss([postcssModules(createPostcssModulesOptions())]).process(code, {
        from: undefined,
      });

    const its = [
      [`.dv-btn {}`],
      [
        `.a, .aa .dv-b {}`,
        `.${clsUniquePrefix}a, .${clsUniquePrefix}aa .dv-b {}`,
      ],
      [`@keyframes a {}`, `@keyframes ${clsUniquePrefix}a {}`],
      [
        `a { animation-name: aaa; }`,
        `a { animation-name: ${clsUniquePrefix}aaa; }`,
      ],
      [
        `a { animation: bbb 1s, ccc 2s; }`,
        `a { animation: ${clsUniquePrefix}bbb 1s, ${clsUniquePrefix}ccc 2s; }`,
      ],
      [`a { animation-name: var(--a); }`, `a { animation-name: var(--a); }`],
    ];

    for (let index = 0; index < its.length; index++) {
      let [code, result] = its[index];
      result = result ?? code;

      const actualResult = await compile(code);
      expect(actualResult.css.trim()).toEqual(result);
    }
  });

  it(
    'babel-plugin',
    async () => {
      const babel = await import('@babel/core');
      const compile = (code: string) =>
        babel.transform(code, {
          plugins: [[createClassnamePlugin]],
        });

      const file = await fs.readFile(
        path.resolve(__dirname, 'fixtures/classname-plugin.js'),
        {
          encoding: 'utf-8',
        },
      );
      const prettierCfg = await fs.readJSON(
        path.resolve(process.cwd(), '.prettierrc'),
      );
      prettierCfg.parser = 'babel';

      const its = file
        .replace(/\$clsUniquePrefix\$/g, clsUniquePrefix)
        .split('/* - */')
        .filter(Boolean)
        .map((it) =>
          it
            .split('\n\n')
            .map((subit) => subit.trim())
            .filter(Boolean),
        )
        .filter((it) => it.length);

      its.forEach(([code, result]) => {
        const actualResult = compile(code);
        expect(prettier.format(actualResult!.code, prettierCfg).trim()).toEqual(
          result,
        );
      });
    },
    20 * 1000,
  );
});
