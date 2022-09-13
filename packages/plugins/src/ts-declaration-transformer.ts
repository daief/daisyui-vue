import * as ts from 'typescript';

export const createDeclarationTransformer: ts.TransformerFactory<ts.Node> = (
  context,
) => {
  const c = context.getCompilerOptions();
  console.log(c);
  return (node) => {
    return node;
  };
};
