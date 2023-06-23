import { cac } from 'cac';
import path from 'path';
import { createIcons, init, parseCssTheme } from './init';
import fs from 'fs-extra';

const cli = cac('dv');

const context = process.cwd();
const workspace = (...ps: string[]) => path.resolve(context, ...ps);

cli.command('init', 'init daisyui & theme').action(async () => {
  return init(context);
});

cli.command('icons', 'create icons').action(async () => {
  return createIcons(context);
});

cli.command('gen-themes', 'init theme').action(async () => {
  return parseCssTheme(context);
});

cli.command('pre-publish', '').action(async () => {
  const pkg = fs.readJsonSync(workspace('package.json'));
  pkg.private = false;
  pkg.main = 'index.js';
  pkg.module = 'index.js';
  pkg.type = 'module';
  delete pkg.devDependencies;
  fs.writeJSONSync(workspace('dist/package.json'), pkg, {
    spaces: 2,
  });
  ['.npmrc'].forEach((file) => {
    fs.copyFileSync(workspace(file), workspace('dist', file));
  });
  console.log('package.json:\n', JSON.stringify(pkg, null, 4));
});

cli.command('publish', '').action(async () => {
  const { execSync } = await import('child_process');
  execSync('npm publish', {
    cwd: workspace('dist'),
    stdio: 'inherit',
  });
});

cli.help().parse();
