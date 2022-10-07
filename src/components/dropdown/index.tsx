import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { Popper, popperProps } from '../popper';
import styles from './style';

export const dropdownProps = {
  ...popperProps,
  placement: {
    ...popperProps.placement,
    default: 'bottom',
  },
};

export type IDropdownProps = ExtractFromProps<typeof dropdownProps>;

export const Dropdown = componentV2<IDropdownProps>(
  {
    name: 'Dropdown',
    props: dropdownProps,
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
