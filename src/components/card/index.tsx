import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { computed, h, HTMLAttributes } from 'vue';
import style from './style';
import { useTheme } from 'daisyui-vue/shared/ctx';

export const cardProps = {
  bordered: {
    type: Boolean,
    default: true,
  },
  side: {
    type: Boolean,
    default: false,
  },
  imageFull: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  glass: {
    type: Boolean,
    default: false,
  },
  image: String,
  title: String,
  description: String,
};

export type ICardProps = ExtractFromProps<typeof cardProps>;

export const Card = componentV2<ICardProps, HTMLAttributes>(
  {
    name: 'Card',
    props: cardProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      const cls = computed(() => ({
        [theme.className]: true,
        'dv-card': true,
        'dv-card-bordered': props.bordered,
        'dv-image-full': props.imageFull,
        'dv-card-compact': props.compact,
        'dv-card-side': props.side,
        'dv-glass': props.glass,
      }));

      return () => (
        <div class={cls.value}>
          {slots.default?.() || (
            <>
              {props.image && <CardImage src={props.image} />}
              <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <p>{props.description}</p>
                <CardActions>{slots.actions?.()}</CardActions>
              </CardBody>
            </>
          )}
        </div>
      );
    },
  },
  style,
);

export const cardImageProps = {
  src: String,
};

export type ICardImageProps = ExtractFromProps<typeof cardImageProps>;

export const CardImage = componentV2<ICardImageProps, HTMLAttributes>(
  {
    name: 'CardImage',
    props: cardImageProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      return () => {
        return (
          <figure class={[theme.className, 'dv-card-image']}>
            {slots.default?.() || <img src={props.src} />}
          </figure>
        );
      };
    },
  },
  style,
);

export const cardBodyProps = {};

export type ICardBodyProps = ExtractFromProps<typeof cardBodyProps>;

export const CardBody = componentV2<ICardBodyProps, HTMLAttributes>(
  {
    name: 'CardBody',
    props: cardBodyProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      return () => (
        <div class={[theme.className, 'dv-card-body']}>{slots.default?.()}</div>
      );
    },
  },
  style,
);

export const cardTitleProps = {
  component: {
    type: String,
    default: 'h2',
  },
};

export type ICardTitleProps = ExtractFromProps<typeof cardTitleProps>;

export const CardTitle = componentV2<ICardTitleProps, HTMLAttributes>(
  {
    name: 'CardTitle',
    props: cardTitleProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      return () =>
        h(
          props.component || 'h2',
          { class: [theme.className, 'dv-card-title'] },
          slots.default?.(),
        );
    },
  },
  style,
);

export const cardActionsProps = {};

export type ICardActionsProps = ExtractFromProps<typeof cardActionsProps>;

export const CardActions = componentV2<ICardActionsProps, HTMLAttributes>(
  {
    name: 'CardActions',
    props: cardActionsProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      return () => (
        <div class={[theme.className, 'dv-card-actions']}>
          {slots.default?.()}
        </div>
      );
    },
  },
  style,
);
