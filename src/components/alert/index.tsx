import { component } from '@/shared/styled';
import { HTMLAttributes } from '@vue/runtime-dom';
import style from './style';

export interface IAlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
}

export const Alert = component<IAlertProps & HTMLAttributes>(
  {
    name: 'Alert',
    setup: (_, { attrs, slots }) => {
      return () => (
        <div class={['alert', `alert-${attrs.type}`]}>{slots.default?.()}</div>
      );
    },
  },
  style,
);
