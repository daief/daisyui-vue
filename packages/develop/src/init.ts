const pkg = require('../package.json');
const version = pkg.dependencies.daisyui;

// @ts-ignore
import downloadRepo from 'download-git-repo';
import path from 'path';
import fs from 'fs-extra';
// @ts-ignore
import fetch from 'node-fetch';

export const init = async (context: string) => {
  const workspace = (...ps: string[]) => path.resolve(context, ...ps);

  const clone = () =>
    new Promise<void>((a, r) => {
      downloadRepo(
        'saadeghi/daisyui#v' + version,
        workspace('src/_daisyui'),
        (err: any) => {
          if (err) {
            return r(err);
          }
          fs.emptyDirSync(workspace('src/_daisyui/examples'));
          a();
        },
      );
    });

  const themeCss = `https://cdn.jsdelivr.net/npm/daisyui@${version}/dist/themes.css`;
  const downloadTheme = () =>
    fetch(themeCss).then((res: any) => {
      const themeFile = workspace('src/components/_styles/theme.css');

      const fileStream = fs.createWriteStream(themeFile, { flags: 'w' });
      return new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on('error', reject);
        fileStream.on('finish', resolve);
      });
    });

  return Promise.all([clone(), downloadTheme()]);
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
import { Icon, iconProps, IIconProps } from './icon';
export * from './icon';
`;

  const iconTpl = `export const Icon$name = defineComponent<IIconProps & HTMLAttributes>({
    name: 'Icon$name',
    props: iconProps as any,
    setup: (props) => {
      return () => (
        <Icon {...props}>$slot</Icon>
      );
    },
  });`;

  let file = topImports;

  file += 'import {\n';
  file += icons.join(',\n');
  file += `} from '@vicons/ionicons5'\n`;

  file += icons
    .map((icon) =>
      iconTpl.replace(/\$name/g, icon).replace('$slot', `<${icon} />`),
    )
    .join('\n');

  await fs.writeFile(workspace('src/icons/index.tsx'), file);

  console.log(`Create ${icons.length} icons success.`);
}
