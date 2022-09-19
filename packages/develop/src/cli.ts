import { cac } from 'cac';
import { createIcons, init } from './init';

const cli = cac('dv');

const context = process.cwd();

cli.command('init', 'init daisyui & theme').action(async () => {
  return init(context);
});

cli.command('icons', 'create icons').action(async () => {
  return createIcons(context);
});

cli.help().parse();
