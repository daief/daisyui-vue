import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IStateColor } from 'daisyui-vue/shared/types/common';
import {
  IconBanOutline,
  IconCheckmarkCircleOutline,
  IconInformationCircleOutline,
  IconWarningOutline,
} from '../icon';
import { HTMLAttributes, PropType } from 'vue';
import style from './style';

export const alertProps = {
  type: {
    type: String as PropType<IStateColor>,
    default: '',
  },
};

export type IAlertProps = ExtractFromProps<typeof alertProps>;

export const Alert = componentV2<IAlertProps, HTMLAttributes>(
  {
    name: 'Alert',
    props: alertProps,
    setup: (props, { slots }) => {
      return () => {
        const icon =
          slots.icon?.() ||
          {
            info: () => <IconInformationCircleOutline />,
            success: () => <IconCheckmarkCircleOutline />,
            warning: () => <IconWarningOutline />,
            error: () => <IconBanOutline />,
          }[props.type!]?.();

        const actions = slots.actions?.();
        const content = slots.content?.();
        const defaultSlot = slots.default?.();
        return (
          <div class={['dv-alert', `dv-alert-${props.type || ''}`]}>
            <div class="dv-alert-content">
              {icon ? <div class="dv-alert-iconwrap">{icon}</div> : null}
              <label>
                {content ? (
                  <>
                    <h4>{defaultSlot}</h4>
                    <p>{content}</p>
                  </>
                ) : (
                  defaultSlot
                )}
              </label>
            </div>
            {actions ? <div class="dv-alert-actions">{actions}</div> : null}
          </div>
        );
      };
    },
  },
  style,
);
