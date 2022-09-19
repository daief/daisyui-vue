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
