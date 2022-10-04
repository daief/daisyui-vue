import { componentV2 } from 'daisyui-vue/shared/styled';
import styles from './style';

export const indicatorProps = {};

export const Indicator = componentV2(
  {
    name: 'Indicator',
    props: indicatorProps,
    setup: () => {
      return () => {
        // TODO
        return <div>Indicator</div>;
      };
    },
  },
  styles,
);
