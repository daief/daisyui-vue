import vscode from 'vscode';
import path from 'path';
import fs from 'fs';

function debounce<T extends Function>(fn: T, t = 500): T {
  let timeout: NodeJS.Timer;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), t);
  } as any;
}

export function activate(context: vscode.ExtensionContext) {
  const opc = vscode.window.createOutputChannel('DaisyuiStyle');
  const root = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath || '';
  const prefix = 'src/_daisyui/src';

  const dirs = ['components', 'utilities'];

  opc.appendLine('Actived, ' + root);

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.ds-insert-style', async () => {
      const comptName = (await vscode.window.showInputBox({})) || '';
      const results = [] as string[];

      dirs.forEach((dir) => {
        ['unstyled', 'styled'].forEach((s) => {
          const fileName = path.join(dir, s, `${comptName}.css`);
          const file = path.join(root, prefix, fileName);
          if (fs.existsSync(file)) {
            results.push(fileName);
          }
        });
      });

      let resultStr = results.reduce((acc, cur, i) => {
        return acc + '\n' + `import s${i + 1} from '@styles/${cur}';`;
      }, '');

      resultStr += `\nexport default [${results
        .map((r, i) => `s${i + 1}`)
        .join(', ')}];`;

      const editoer = vscode.window.activeTextEditor;
      editoer?.edit((builder) => {
        const selection = editoer?.selection;
        builder.insert(selection.start, resultStr);
      });

      opc.appendLine(resultStr);
    }),
  );
}
