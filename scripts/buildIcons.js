const path = require('path');
const fs = require('fs-extra');
const parser = require('node-html-parser');

const baseDir = path.resolve(__dirname, '../src/icons');
const svgDir = path.resolve(baseDir, 'svg');
const vueDir = path.resolve(baseDir, 'vue');

const svgs = fs.readdirSync(svgDir);

const iconFileTpl = `
import { component } from '@/shared/styled';
import { IconBase, IIconBaseProps } from '../icon-base';

const $name = component<IIconBaseProps>({
  name: '$name',
  setup: () => {
    return () => (
      <IconBase>
        $child
      </IconBase>
    );
  },
});

export default $name;
`;

const icons = [];

fs.emptyDirSync(vueDir);

for (let index = 0; index < svgs.length; index++) {
  const basename = svgs[index];
  const svgName = basename
    .replace(/\.svg$/i, '')
    // ax-bc-df => AxBcDf
    .split('-')
    .map((it) => it[0].toUpperCase() + it.slice(1))
    .join('');
  const iconName = `Icon${svgName}`;
  icons.push(iconName);

  const svgContent = fs.readFileSync(path.resolve(svgDir, basename), 'utf-8');
  const svgChildContent = parser.parse(svgContent).firstChild.innerHTML;

  const iconFile = iconFileTpl
    .replace(/\$name/g, iconName)
    .replace(/\$child/g, svgChildContent);

  fs.writeFileSync(path.resolve(vueDir, iconName + '.tsx'), iconFile);

  console.log(`✅ ${iconName}`);
}

const indexContent = icons
  .map((name) => `export { default as ${name} } from './${name}'`)
  .join('\n');
fs.writeFileSync(path.resolve(vueDir, 'index.tsx'), indexContent);
