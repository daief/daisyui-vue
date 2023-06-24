import * as ts from 'typescript';
import {
  createClassnameTransformer,
  clsUniquePrefix,
  postcssDvClsTransformer,
} from '../src/build/classname-plugin';
import postcss from 'postcss';

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
      ['__c("btn")', `["${clsUniquePrefix}btn"];`],
      ['__c(`btn-${a}`)', `[\`${clsUniquePrefix}btn-\${a}\`];`],
      ['__c("a", `b`)', `["${clsUniquePrefix}a", \`${clsUniquePrefix}b\`];`],
      [
        `__c({
          a: true
        })`,
        `[{ \"${clsUniquePrefix}a\": true }];`,
      ],
      [
        `__c({
          "a": true
        })`,
        `[{ \"${clsUniquePrefix}a\": true }];`,
      ],
      [
        `__c({
          [\`bb\`]: true
        })`,
        `[{ [\`${clsUniquePrefix}bb\`]: true }];`,
      ],
    ];

    its.forEach(([code, result]) => {
      const actualResult = compile(code);
      expect(actualResult.outputText.trim()).toEqual(result);
    });
  });
});
