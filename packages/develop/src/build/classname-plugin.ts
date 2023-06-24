import * as path from 'path';
import { createHash } from 'crypto';
import * as ts from 'typescript';
import { Plugin } from 'postcss';
import { parse } from '@hookun/parse-animation-shorthand';

const rootPkg = require(path.resolve(process.cwd(), 'package.json'));

export const clsUnique =
  '_' +
  createHash('sha256', { outputLength: 32 })
    .update(rootPkg.name + '-' + rootPkg.version)
    .digest('base64url')
    .slice(0, 6);

export const clsUniquePrefix = clsUnique + '-';

/**
 * __c 包裹的类名添加标识
 * @param context
 * @returns
 */
export const createClassnameTransformer: ts.TransformerFactory<
  ts.SourceFile
> = (context) => {
  const checkHeadText = (txt: string) => {
    if (!txt || !txt.startsWith('dv-')) {
      throw new Error(
        `[${txt}] ` + 'must use like __c`dv-xx`, starts with dv-',
      );
    }
  };

  return (source) => {
    const visitor: ts.Visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (
        ts.isTaggedTemplateExpression(node) &&
        node.tag.getFullText() === '__c'
      ) {
        const tpl = node.template;

        if (ts.isNoSubstitutionTemplateLiteral(tpl)) {
          const headText = tpl.getText().replace(/`/g, '');
          checkHeadText(headText);

          return ts.factory.createNoSubstitutionTemplateLiteral(
            headText.replace(/^dv/, clsUnique),
          );
        }

        if (ts.isTemplateExpression(tpl)) {
          const headTxt = tpl.head
            .getText()
            .replace(/^`/, '')
            .replace('${', '');

          checkHeadText(headTxt);

          return ts.factory.createTemplateExpression(
            ts.factory.createTemplateHead(headTxt.replace(/^dv/, clsUnique)),
            tpl.templateSpans,
          );
        }

        throw new Error('not template expression, must use like __c`dv-xx`');
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(source, visitor);
  };
};

export const createClassnameTransformerFactory = (program: ts.Program) => {
  return createClassnameTransformer;
};

export const convertKeyFramesName = (name: string) => clsUniquePrefix + name;

/**
 * classname 和 keyframes name 添加 hash 前缀
 * - 暂时地：dv- 开头的类忽略
 * @returns
 */
export const postcssDvClsTransformer = (): Plugin => {
  const cache: Record<string, boolean> = {};
  return {
    postcssPlugin: 'postcssDvClsTransformer',
    Rule(rule) {
      if (cache[rule.selector]) return;

      rule.selector = rule.selector.replace(/\.(dv-)?/g, (substr) => {
        if (substr === '.dv-') return substr; // TODO rm
        return '.' + clsUniquePrefix;
      });
      cache[rule.selector] = true;
    },
    AtRuleExit(atRule) {
      if (atRule.name !== 'keyframes') return;
      if (atRule.params.startsWith(clsUnique)) return;

      if (atRule.params.startsWith('dv-')) return; // TODO rm

      atRule.params = convertKeyFramesName(atRule.params);
    },
    Declaration: {
      ['animation-name']: (decl) => {
        if (decl.value.startsWith(clsUnique)) return;
        if (decl.value.startsWith('var(')) return;
        if (decl.value.startsWith('dv-')) return; // TODO rm

        decl.value = convertKeyFramesName(decl.value);
      },

      animation: (decl) => {
        const parsed = parse(decl.value);
        const names = parsed.map((it) => it.name);
        names.forEach((name) => {
          if (name.startsWith(clsUnique)) return;
          if (decl.value.startsWith('var(')) return;
          if (decl.value.startsWith('dv-')) return; // TODO rm

          decl.value = decl.value.replace(name, convertKeyFramesName(name));
        });
      },
    },
  };
};
