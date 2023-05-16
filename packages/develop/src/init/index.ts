import pkg from '../../package.json';
const version = pkg.dependencies.daisyui;

// @ts-ignore
import downloadRepo from 'download-git-repo';
import path from 'path';
import fs from 'fs-extra';
// @ts-ignore
import fetch from 'node-fetch';
import { parseCssTheme } from './parse-css-theme';

export const init = async (context: string) => {
  const workspace = (...ps: string[]) => path.resolve(context, ...ps);

  const clone = () =>
    new Promise<void>((accept, reject) => {
      downloadRepo(
        'saadeghi/daisyui#v' + version,
        workspace('src/_daisyui'),
        {
          shallow: 1,
        },
        (err: any) => {
          if (err) {
            return reject(err);
          }
          accept();
          fs.emptyDirSync(workspace('src/_daisyui/examples'));
          console.log('[Init]: clone daisyui repo done');
        },
      );
    });

  return Promise.all([clone(), parseCssTheme(context)]);
};

export async function createIcons(context: string) {
  const workspace = (...ps: string[]) => path.resolve(context, ...ps);
  const iconFile = require.resolve('@vicons/ionicons5');

  const filterFiles = ['index', 'async-index'];

  const icons = await fs.readdir(path.dirname(iconFile)).then((ls) =>
    ls
      .filter((it) => it.endsWith('.js'))
      .map((it) => it.replace('.js', ''))
      .filter((it) => !filterFiles.includes(it)),
  );

  const topImports = `import { defineComponent, HTMLAttributes } from 'vue';
import { Icon, iconProps, IIconProps, IconComponent } from './icon';
`;

  const iconTpl = `
export const Icon$name = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'Icon$name',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>$slot</Icon>
    );
  },
}) as any as IconComponent;
`;

  let file = topImports;

  file += 'import {\n';
  file += '  ' + icons.join(',\n  ');
  file += `} from '@vicons/ionicons5'\n`;

  file += icons
    .map((icon) =>
      iconTpl.replace(/\$name/g, icon).replace('$slot', `<${icon} />`),
    )
    .join('\n');

  await fs.writeFile(workspace('src/components/icon/icons.tsx'), file);

  console.log(`[Generate icons]: create ${icons.length} icons success.`);
}
