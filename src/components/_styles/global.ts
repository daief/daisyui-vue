import d_glass from './daisyui-utilities-global/glass.css';
import d_variables from './daisyui-utilities-global/variables.css';
import animate from './animate.less';

const globalStyles = [d_glass, d_variables, animate];
export default globalStyles;

export const globalStyleIds = globalStyles.map((it) => it.id);
