import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { IconClose } from '../icon';
import { PropType } from 'vue';
import { Button } from '../button';
import style from './style/widgets.less';
import { useTheme } from 'daisyui-vue/shared/ctx';

// title ----------------------------------------------------------------------------

export const modalTitleProps = {
  closable: {
    type: Boolean,
    default: true,
  },
  onClose: Function as PropType<(e: MouseEvent) => void>,
};

export type IModalTitleProps = ExtractFromProps<typeof modalTitleProps>;

export const ModalTitle = componentV2<IModalTitleProps>(
  {
    name: 'ModalTitle',
    props: modalTitleProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      return () => (
        <div class={[theme.className, 'dv-modal-title']}>
          <h3>{slots.default?.()}</h3>
          {props.closable ? (
            <Button
              shape="circle"
              size="sm"
              class="dv-modal-title-close"
              onClick={props.onClose}
            >
              <IconClose size="1.2em" />
            </Button>
          ) : null}
        </div>
      );
    },
  },
  [style],
);

// body ----------------------------------------------------------------------------

export const modalBodyProps = {};

export type IModalBodyProps = ExtractFromProps<typeof modalBodyProps>;

export const ModalBody = componentV2<IModalBodyProps>(
  {
    name: 'ModalBody',
    props: modalBodyProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      return () => (
        <div class={[theme.className, 'dv-modal-body']}>
          {slots.default?.()}
        </div>
      );
    },
  },
  [style],
);

// action ----------------------------------------------------------------------------

export const modalActionProps = {};

export type IModalActionProps = ExtractFromProps<typeof modalActionProps>;

export const ModalAction = componentV2<IModalActionProps>(
  {
    name: 'ModalAction',
    props: modalActionProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      return () => (
        <div class={[theme.className, 'dv-modal-action']}>
          {slots.default?.()}
        </div>
      );
    },
  },
  [style],
);
