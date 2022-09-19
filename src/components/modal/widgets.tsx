import { componentV2 } from '@/shared/styled';
import { ExtractFromProps } from '@/shared/types/common';
import { Close } from '@vicons/ionicons5';
import { PropType } from 'vue';
import { Button } from '../button';
import style from './style/widgets.less';

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
      return () => (
        <div class="dv-modal-title">
          <h3>{slots.default?.()}</h3>
          {props.closable ? (
            <Button
              shape="circle"
              size="sm"
              class="dv-modal-title-close"
              onClick={props.onClose}
            >
              <Close />
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
      return () => <div class="dv-modal-body">{slots.default?.()}</div>;
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
      return () => <div class="dv-modal-action">{slots.default?.()}</div>;
    },
  },
  [style],
);
