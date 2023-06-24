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
 * ```ts
 * __('a'); // ['$clsUnique-a dv-a']
 * __(`a`); // [`$clsUnique-a dv-a`]
 * __(`a-${x}`); // [`$clsUnique-a-${x}` + ` dv-a-${x}`]
 * ```
 * @param context
 * @returns
 */
export const createClassnameTransformer: ts.TransformerFactory<
  ts.SourceFile
> = (context) => {
  return (source) => {
    const updateNode = (node: ts.Node) => {
      if (ts.isStringLiteral(node)) {
        return ts.factory.createStringLiteral(
          convertClsName(node.text) + ' dv-' + node.text,
        );
      }

      if (ts.isNoSubstitutionTemplateLiteral(node)) {
        return ts.factory.createNoSubstitutionTemplateLiteral(
          convertClsName(node.text) + ' dv-' + node.text,
        );
      }

      if (ts.isTemplateExpression(node)) {
        return ts.factory.createBinaryExpression(
          ts.factory.createTemplateExpression(
            ts.factory.createTemplateHead(convertClsName(node.head.text)),
            node.templateSpans,
          ),
          ts.SyntaxKind.PlusToken,
          ts.factory.createTemplateExpression(
            ts.factory.createTemplateHead(' dv-' + node.head.text),
            node.templateSpans,
          ),
        );
      }

      return null;
    };

    const visitor: ts.Visitor = (node) => {
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === '__c'
      ) {
        const args = node.arguments.map((arg) => {
          const newArg = updateNode(arg);
          if (newArg) return newArg;

          if (ts.isObjectLiteralExpression(arg)) {
            const transformedProperties = arg.properties.map((prop) => {
              if (!ts.isPropertyAssignment(prop)) return prop;

              const propertyName = prop.name;
              const propertyValue = prop.initializer;

              if (ts.isComputedPropertyName(propertyName)) {
                return ts.factory.createPropertyAssignment(
                  ts.factory.updateComputedPropertyName(
                    propertyName,
                    updateNode(propertyName.expression) ||
                      propertyName.expression,
                  ),
                  propertyValue,
                );
              }

              if (
                ts.isIdentifier(propertyName) ||
                ts.isStringLiteral(propertyName)
              ) {
                const transformedPropertyName = ts.factory.createStringLiteral(
                  convertClsName(propertyName.text) +
                    ' dv-' +
                    propertyName.text,
                );

                return ts.factory.createPropertyAssignment(
                  transformedPropertyName,
                  propertyValue,
                );
              }

              return prop;
            });

            const transformedObject = ts.factory.createObjectLiteralExpression(
              transformedProperties,
            );

            return transformedObject;
          }

          return arg;
        });

        return ts.factory.createArrayLiteralExpression(args);
      }

      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(source, visitor);
  };
};

export const createClassnameTransformerFactory = (program: ts.Program) => {
  return createClassnameTransformer;
};

const convertClsName = (name: string) => clsUniquePrefix + name;

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

      atRule.params = convertClsName(atRule.params);
    },
    Declaration: {
      ['animation-name']: (decl) => {
        if (decl.value.startsWith(clsUnique)) return;
        if (decl.value.startsWith('var(')) return;
        if (decl.value.startsWith('dv-')) return; // TODO rm

        decl.value = convertClsName(decl.value);
      },

      animation: (decl) => {
        const parsed = parse(decl.value);
        const names = parsed.map((it) => it.name);
        names.forEach((name) => {
          if (name.startsWith(clsUnique)) return;
          if (decl.value.startsWith('var(')) return;
          if (decl.value.startsWith('dv-')) return; // TODO rm

          decl.value = decl.value.replace(name, convertClsName(name));
        });
      },
    },
  };
};
