import d_glass from './daisyui-utilities-global/glass.css';
import d_variables from './daisyui-utilities-global/variables.css';
import animate from './animate.less';
import theme from './theme.css';

const globalStyles = [d_glass, d_variables, animate, theme];
export default globalStyles;

export const globalStyleIds = globalStyles.map((it) => it.id);
