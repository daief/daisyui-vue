import * as path from 'path';
import { createHash } from 'crypto';
import * as babelCore from '@babel/core';
import postcssModules from 'postcss-modules';

const rootPkg = require(path.resolve(process.cwd(), 'package.json'));

export const clsUnique =
  '_' +
  createHash('sha256', { outputLength: 32 })
    .update(rootPkg.name + '-' + rootPkg.version)
    .digest('base64url')
    .slice(0, 6);

export const clsUniquePrefix = clsUnique + '-';

const convertClsName = (name: string) => clsUniquePrefix + name;

/**
 * classname 和 keyframes name 添加 hash 前缀
 * - 暂时地：dv- 开头的类忽略
 */
export const createPostcssModulesOptions =
  (): Parameters<postcssModules>[0] => ({
    getJSON: () => {
      // leave empty to avoid json output
    },
    scopeBehaviour: 'local',
    generateScopedName: (
      name: string,
      filename: string,
      css: string,
    ): string => {
      if (name.startsWith('dv-')) return name; // TODO rm
      if (name.startsWith('--')) return name;
      return convertClsName(name);
    },
  });

export const createClassnamePlugin = ({
  types: t,
}: typeof babelCore): babelCore.PluginObj => {
  const updateNode = (node: babelCore.types.Node) => {
    if (t.isStringLiteral(node) || t.isIdentifier(node)) {
      const text = t.isStringLiteral(node) ? node.value : node.name;
      return t.stringLiteral(convertClsName(text) + ' dv-' + text);
    }

    if (t.isTemplateLiteral(node)) {
      const first = node.quasis[0];
      const rest = node.quasis.slice(1, -1);
      const last = node.quasis[node.quasis.length - 1];

      const expressions = [
        ...node.expressions,
        ...node.expressions.map((it) => t.cloneNode(it)),
      ];

      if (!node.expressions.length) {
        return t.templateLiteral(
          [
            t.templateElement({
              raw: convertClsName(first.value.raw) + ' dv-' + first.value.raw,
            }),
          ],
          expressions,
        );
      }

      return t.templateLiteral(
        [
          t.templateElement({ raw: convertClsName(first.value.raw) }),
          ...rest,
          t.templateElement({
            raw: last.value.raw + ' dv-' + first.value.raw,
          }),
          ...rest,
          last,
        ],
        expressions,
      );
    }

    return null;
  };

  return {
    visitor: {
      CallExpression(path) {
        const node = path.node as babelCore.types.CallExpression;
        if (!t.isIdentifier(node.callee)) return;
        if (node.callee.name !== '__c') return;

        const args = node.arguments.map((arg) => {
          if (t.isIdentifier(arg)) return arg;

          const newArg = updateNode(arg);
          if (newArg) return newArg;

          if (t.isObjectExpression(arg)) {
            const transformedProperties = arg.properties.map((prop) => {
              if (!t.isObjectProperty(prop)) return prop;

              const key = prop.key;
              const value = prop.value;

              if (prop.computed && t.isIdentifier(key)) return prop;

              const newKey = updateNode(key);

              if (newKey) {
                return t.objectProperty(
                  newKey,
                  value,
                  prop.computed,
                  prop.shorthand,
                  prop.decorators,
                );
              }

              return prop;
            });

            const transformedObject = t.objectExpression(transformedProperties);

            return transformedObject;
          }

          return arg;
        });

        path.replaceWith(
          t.arrayExpression(args as babelCore.types.Expression[]),
        );
      },
      TaggedTemplateExpression(path) {
        const node = path.node;
        if (!t.isIdentifier(node.tag)) return;
        if (node.tag.name !== '__c') return;
        const newQuasi = updateNode(node.quasi);
        if (newQuasi) {
          path.replaceWith(newQuasi);
        }
      },
    },
  };
};
