import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { HTMLAttributes, PropType } from 'vue';
import style from './style';

export const artboardProps = {
  phone: {
    type: [String, Boolean] as PropType<
      boolean | '1' | '2' | '3' | '4' | '5' | '6'
    >,
  },
  horizontal: {
    type: Boolean,
  },
};

export type IArtboardProps = ExtractFromProps<typeof artboardProps>;

export const Artboard = componentV2<IArtboardProps, HTMLAttributes>(
  {
    name: 'Artboard',
    props: artboardProps,
    setup: (props, { slots }) => {
      return () => (
        <div
          class={[
            'dv-artboard dv-artboard-demo',
            {
              'dv-phone': ['', true].includes(props.phone),
              [`dv-phone-${props.phone}`]:
                !!props.phone && typeof props.phone === 'string',
              'dv-horizontal': !!props.horizontal,
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
