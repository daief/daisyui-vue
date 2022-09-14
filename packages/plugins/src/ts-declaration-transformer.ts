import * as ts from 'typescript';
import * as path from 'path';

/**
 * 替换产物声明文件中的别名路径
 * @param context
 * @returns
 */
export const createDeclarationTransformer: ts.TransformerFactory<ts.SourceFile> =
  (context) => {
    const config = context.getCompilerOptions();
    const aliasKeys = Object.keys(config.paths!).map((it) =>
      it.replace('*', ''),
    ); // [ '@/', '@styles/' ]

    return (source) => {
      const currentFileName = source.fileName;

      const visitor: ts.Visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
        const isOk =
          node.parent &&
          (ts.isImportDeclaration(node.parent) ||
            ts.isExportDeclaration(node.parent)) &&
          ts.isStringLiteral(node);

        let importAliaKey = isOk
          ? aliasKeys.find((key) => node.text.startsWith(key))
          : undefined;

        if (isOk && importAliaKey) {
          const importAliaKeyWithStar = importAliaKey + '*';
          // 替换别名
          const prefix = config.paths![importAliaKeyWithStar][0].replace(
            '*',
            '',
          );
          const importFileName = path.resolve(
            config.baseUrl!,
            prefix,
            node.text.replace(importAliaKey, ''),
          );

          const relativeImport = path.relative(
            path.dirname(currentFileName),
            importFileName,
          );

          return ts.factory.createStringLiteral(relativeImport, true);
        }
        return ts.visitEachChild(node, visitor, context);
      };

      return ts.visitNode(source, visitor);
    };
  };

export const createDeclarationTransformerFactory = (program: ts.Program) => {
  return createDeclarationTransformer;
};
