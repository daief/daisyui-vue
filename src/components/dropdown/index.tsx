import { componentV2 } from '@/shared/styled';
import { Popper, popperProps } from '../popper';
import styles from './style';

const props = {
  ...popperProps,
  placement: {
    ...popperProps.placement,
    default: 'bottom',
  },
};

export const Dropdown = componentV2(
  {
    name: 'Dropdown',
    props,
    setup: (props, { slots }) => {
      return () => (
        <Popper class="dv-dropdown" {...props} hideArrow>
          {slots}
        </Popper>
      );
    },
  },
  styles,
);
