import * as ts from 'typescript';
import {
  createClassnameTransformer,
  clsUniquePrefix,
  postcssDvClsTransformer,
  convertKeyFramesName,
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

  // it('ts-transformer', () => {
  //   const compile = (code: string) =>
  //     ts.transpileModule(code, {
  //       compilerOptions: {
  //         target: ts.ScriptTarget.ES2015,
  //       },
  //       transformers: {
  //         before: [createClassnameTransformer],
  //       },
  //     });

  //   const codes = ['__c`dv-btn`', "__c`dv-btn-${'primary'}`"];
  //   const results = codes.map(
  //     (it) => it.replace('__c', '').replace('`dv', '`' + clsUnique) + ';',
  //   );

  //   codes.forEach((code, i) => {
  //     const result = compile(code);
  //     expect(result.outputText.trim()).toEqual(results[i]);
  //   });

  //   expect(() => compile('__c``')).toThrow();
  //   expect(() => compile('__c`a`')).toThrow();
  //   expect(() => compile('__c`dva`')).toThrow();
  // });
});
