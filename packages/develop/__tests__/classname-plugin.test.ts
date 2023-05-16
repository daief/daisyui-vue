import * as ts from 'typescript';
import {
  createClassnameTransformer,
  clsUnique,
  postcssDvClsTransformer,
  convertKeyFramesName,
} from '../src/build/classname-plugin';
import postcss from 'postcss';

describe('classname-plugin', () => {
  it('postcss', async () => {
    const compile = (code: string) =>
      postcss([postcssDvClsTransformer()]).process(code, { from: undefined });

    const classCodes = [`.dv-btn {}`, `.dv-a, .dv-a .dv-b {}`];
    const classCodesResult = classCodes.map((it) =>
      it.replace(/\.dv-/g, '.' + clsUnique + '-'),
    );

    const keyframesCodes = [
      `@keyframes a {}`,
      `a { animation-name: aaa; }`,
      `a { animation: bbb 1s, ccc 2s; }`,
      `a { animation-name: var(--a); }`,
    ];
    const keyframesCodesResults = [
      `@keyframes ${convertKeyFramesName('a')} {}`,
      `a { animation-name: ${convertKeyFramesName('aaa')}; }`,
      `a { animation: ${convertKeyFramesName('bbb')} 1s, ${convertKeyFramesName(
        'ccc',
      )} 2s; }`,
      `a { animation-name: var(--a); }`,
    ];

    const codes = [...classCodes, ...keyframesCodes];
    const results = [...classCodesResult, ...keyframesCodesResults];

    for (let index = 0; index < codes.length; index++) {
      const code = codes[index];
      const result = await compile(code);
      expect(result.css.trim()).toEqual(results[index]);
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

    const codes = ['__c`dv-btn`', "__c`dv-btn-${'primary'}`"];
    const results = codes.map(
      (it) => it.replace('__c', '').replace('`dv', '`' + clsUnique) + ';',
    );

    codes.forEach((code, i) => {
      const result = compile(code);
      expect(result.outputText.trim()).toEqual(results[i]);
    });

    expect(() => compile('__c``')).toThrow();
    expect(() => compile('__c`a`')).toThrow();
    expect(() => compile('__c`dva`')).toThrow();
  });
});
