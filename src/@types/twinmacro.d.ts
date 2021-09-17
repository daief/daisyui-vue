import 'twin.macro';
import { css as c } from '@emotion/css';
declare module 'twin.macro' {
  export const css: typeof c;
}
