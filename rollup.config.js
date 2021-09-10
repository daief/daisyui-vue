import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

// TODO 样式

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const componentsConfig = {
  input: {
    index: 'src/index',
    // 'components/button/index': 'src/components/button/index.tsx',
  },
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
    },
    {
      dir: 'dist/lib',
      format: 'cjs',
      exports: 'auto',
    },
  ],
  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en/#external
  external: ['vue'],
  plugins: [
    typescript(),
    // postcss({
    //   extract: true,
    //   extract: 'style/button.css',
    // }),
    resolve({ extensions }),
    babel({ extensions, babelHelpers: 'bundled' }),
  ],
};

export default componentsConfig;
