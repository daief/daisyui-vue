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
  const cfg = Object.entries({
    'c-us': ['components', 'unstyled'],
    'c-s': ['components', 'styled'],
    'u-us': ['utilities', 'unstyled'],
    'u-s': ['utilities', 'styled'],
  });

  opc.appendLine('Actived, ' + root);

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.ds-insert-style', async () => {
      const comptName = (await vscode.window.showInputBox({})) || '';
      const results = [] as string[];
      /**
       * {
       *   'c-us': '',
       *   'c-s': '',
       *   'u-us': '',
       *   'u-s': '',
       * }
       */
      const resultMap: Record<string, string> = {};

      dirs.forEach((dir) => {
        ['unstyled', 'styled'].forEach((s) => {
          const fileName = path.join(dir, s, `${comptName}.css`);
          const file = path.join(root, prefix, fileName);
          if (fs.existsSync(file)) {
            const t = cfg.find((it) =>
              it[1].every((subpath) => file.includes(subpath)),
            );
            if (t) {
              results.push(t[0]);
              resultMap[t[0]] = fs.readFileSync(file, { encoding: 'utf-8' });
            }
          }
        });
      });

      let resultStr = results.reduce((acc, cur, i) => {
        return acc + '\n' + `import s${i + 1} from './${cur}.css';`;
      }, '');

      resultStr += `\nexport default [${results
        .map((r, i) => `s${i + 1}`)
        .join(', ')}];`;

      const editoer = vscode.window.activeTextEditor;

      if (editoer) {
        editoer.edit((builder) => {
          const selection = editoer?.selection;
          builder.insert(selection.start, resultStr);
        });

        if (editoer.document.fileName) {
          const baseDir = path.dirname(editoer.document.fileName);
          Object.entries(resultMap).forEach(([key, content]) => {
            fs.writeFileSync(path.join(baseDir, key + '.css'), content);
          });
        }
      }

      opc.appendLine(resultStr);
      opc.appendLine(JSON.stringify(resultMap, null, 4));
    }),
  );
}
