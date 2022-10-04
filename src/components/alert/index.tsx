import { component } from 'daisyui-vue/shared/styled';
import { IStateColor } from 'daisyui-vue/shared/types/common';
import {
  BanOutline,
  CheckmarkCircleOutline,
  InformationCircleOutline,
  WarningOutline,
} from '@vicons/ionicons5';
import { HTMLAttributes } from 'vue';
import style from './style';

export interface IAlertProps {
  type?: IStateColor;
}

export const Alert = component<IAlertProps & HTMLAttributes>(
  {
    name: 'Alert',
    setup: (_, { attrs, slots }) => {
      return () => {
        const icon =
          slots.icon?.() ||
          {
            info: () => <InformationCircleOutline />,
            success: () => <CheckmarkCircleOutline />,
            warning: () => <WarningOutline />,
            error: () => <BanOutline />,
          }[attrs.type!]?.();

        const actions = slots.actions?.();
        const content = slots.content?.();
        const defaultSlot = slots.default?.();
        return (
          <div class={['dv-alert alert', `alert-${attrs.type || ''}`]}>
            <div class="dv-alert__content">
              {icon ? <div class="dv-alert__iconwrap">{icon}</div> : null}
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
            {actions ? <div class="dv-alert__actions">{actions}</div> : null}
          </div>
        );
      };
    },
  },
  style,
);
