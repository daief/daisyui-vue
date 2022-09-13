import { IconBell, IconInfo, IconInvalid, IconWarning } from '@/icons';
import { component } from '@/shared/styled';
import { IStateColor } from '@/shared/types/common';
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
            info: () => <IconInfo />,
            success: () => <IconBell />, // TODO success icon
            warning: () => <IconWarning />,
            error: () => <IconInvalid />,
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
