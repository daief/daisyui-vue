/**
 * 从 svg 文件生成 tsx 组件
 * - 默认为 stroke 模式，如果是 fill 模式，需要在 svg 上标记 stroke="none"
 * - svg 上的 viewBox 会被继承
 */

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
      <IconBase $props>
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
  const svgNode = parser.parse(svgContent).firstChild;
  const svgChildContent = svgNode.innerHTML;

  const iconFile = iconFileTpl
    .replace(/\$name/g, iconName)
    .replace(/\$child/g, svgChildContent)
    // viewBox
    .replace(
      /\$props/g,
      svgNode.attributes.viewBox
        ? `viewBox="${svgNode.attributes.viewBox}" $props`
        : '$props',
    )
    .replace(
      /\$props/g,
      svgContent.includes('stroke="none"') ? 'useStroke={false}' : '',
    );

  fs.writeFileSync(path.resolve(vueDir, iconName + '.tsx'), iconFile);

  console.log(`✅ ${iconName}`);
}

const indexContent = icons
  .map((name) => `export { default as ${name} } from './${name}'`)
  .join('\n');
fs.writeFileSync(path.resolve(vueDir, 'index.tsx'), indexContent);
