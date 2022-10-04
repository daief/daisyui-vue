import { component } from 'daisyui-vue/shared/styled';
import { HTMLAttributes } from 'vue';
import style from './style';

export interface IArtboardProps {
  phone?: boolean | '1' | '2' | '3' | '4' | '5' | '6';
  horizontal?: boolean;
}

export const Artboard = component<
  IArtboardProps & HTMLAttributes,
  IArtboardProps
>(
  {
    name: 'Artboard',
    props: {
      phone: [String, Boolean],
      horizontal: Boolean,
    },
    setup: (props, { slots }) => {
      return () => (
        <div
          class={[
            'artboard artboard-demo',
            {
              phone: ['', true].includes(props.phone),
              [`phone-${props.phone}`]:
                !!props.phone && typeof props.phone === 'string',
              horizontal: !!props.horizontal,
            },
          ]}
        >
          {slots.default?.()}
        </div>
      );
    },
  },
  style,
);
