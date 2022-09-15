import { cac } from 'cac';
import { init } from './init';

const cli = cac('dv');

const context = process.cwd();

cli.command('init', 'init daisyui & theme').action(async () => {
  return init(context);
});

cli.help().parse();
