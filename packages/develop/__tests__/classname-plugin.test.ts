import * as ts from 'typescript';
import {
  createClassnameTransformer,
  clsUniquePrefix,
  postcssDvClsTransformer,
  createClassnamePlugin,
} from '../src/build/classname-plugin';
import postcss from 'postcss';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as prettier from 'prettier';

describe('classname-plugin', () => {
  it('postcss', async () => {
    const compile = (code: string) =>
      postcss([postcssDvClsTransformer()]).process(code, { from: undefined });

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

  it('ts-transformer', () => {
    const compile = (code: string) =>
      ts.transpileModule(code, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2015,
        },
        transformers: {
          before: [createClassnameTransformer],
        },
      });

    const its = [
      ['__c("btn")', `["${clsUniquePrefix}btn dv-btn"];`],
      ['__c(`btn`)', `[\`${clsUniquePrefix}btn dv-btn\`];`],
      [
        '__c(`btn-${a}`)',
        `[\`${clsUniquePrefix}btn-\${a}\` + \` dv-btn-\${a}\`];`,
      ],
      [
        '__c("a", `b`)',
        `["${clsUniquePrefix}a dv-a", \`${clsUniquePrefix}b dv-b\`];`,
      ],
      [
        `__c({
          a: true
        })`,
        `[{ \"${clsUniquePrefix}a dv-a\": true }];`,
      ],
      [
        `__c({
          "a": true
        })`,
        `[{ \"${clsUniquePrefix}a dv-a\": true }];`,
      ],
      [
        `__c({
          [\`bb\`]: true
        })`,
        `[{ [\`${clsUniquePrefix}bb dv-bb\`]: true }];`,
      ],
      [
        `__c({
          [\`bb-\${a}\`]: true
        })`,
        `[{ [\`${clsUniquePrefix}bb-\${a}\` + \` dv-bb-\${a}\`]: true }];`,
      ],
    ];

    its.forEach(([code, result]) => {
      const actualResult = compile(code);
      expect(actualResult.outputText.trim()).toEqual(result);
    });
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
