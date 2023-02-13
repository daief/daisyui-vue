import { V_MODEL_EVENT } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { isUndefined } from 'daisyui-vue/shared/utils';
import { computed, HTMLAttributes, reactive } from 'vue';
import { Button, ButtonGroup, buttonGroupProps, IButtonProps } from '../button';
import { IconChevronBack, IconChevronForward } from '../icon';

export const paginationProps = {
  ...buttonGroupProps,
  modelValue: {
    type: Number,
    default: void 0,
  },
  total: {
    type: Number,
    default: 0,
  },
};

export type IPaginationProps = ExtractFromProps<typeof paginationProps>;

export const Pagination = componentV2<IPaginationProps, HTMLAttributes>({
  name: 'Pagination',
  props: paginationProps,
  emits: [V_MODEL_EVENT],
  setup(props, { emit }) {
    const delta = 3;
    const state = reactive({
      current: 1,
    });
    const finalCurrent = computed(() =>
      isUndefined(props.modelValue) ? state.current : props.modelValue,
    );

    type Item = 'pre' | 'next' | 'pre-dot' | 'next-dot' | number;

    const items = computed(() => {
      const currentValue = finalCurrent.value;
      const totalValue = props.total;

      const headDelta = currentValue;
      const tailDelta = totalValue - currentValue;

      const config: Array<[content: Item, show: boolean]> = [
        ['pre', currentValue > 1],
        [1, currentValue !== 1],
        ['pre-dot', headDelta > delta + 1],
        [currentValue - 2, currentValue > delta],
        [currentValue - 1, currentValue > delta - 1],
        [currentValue, true],
        [currentValue + 1, currentValue <= totalValue - delta + 1],
        [currentValue + 2, currentValue <= totalValue - delta],
        ['next-dot', tailDelta > delta],
        [totalValue, currentValue !== totalValue],
        ['next', currentValue !== totalValue],
      ];

      return config.filter(([, show]) => show).map((_) => _[0]);
    });

    const handleChange = (page: number) => {
      if (page === finalCurrent.value) return;
      emit(V_MODEL_EVENT, page);
      state.current = page;
    };

    const renderItem = (it: Item) => {
      if (it === 'next-dot' || it === 'pre-dot') {
        return '...';
      }
      if (it === 'pre') {
        return <IconChevronBack />;
      }
      if (it === 'next') {
        return <IconChevronForward />;
      }
      return it;
    };

    const getItemProps = (it: Item): IButtonProps => {
      const ps: IButtonProps = {};
      const currentValue = finalCurrent.value;
      switch (it) {
        case 'pre':
          ps.onClick = () => handleChange(currentValue - 1);
          break;
        case 'next':
          ps.onClick = () => handleChange(currentValue + 1);
          break;
        case 'pre-dot':
          ps.onClick = () =>
            handleChange(Math.max(currentValue - delta - 2, 1));
          break;
        case 'next-dot':
          ps.onClick = () =>
            handleChange(Math.min(currentValue + delta + 2, props.total));
          break;
        default:
          ps.onClick = () => handleChange(it);
          ps.active = it === currentValue;
          if (ps.active) ps.variant = 'primary';
      }
      return ps;
    };

    return () => {
      if (!props.total || props.total < 2) return null;

      return (
        <ButtonGroup {...props}>
          {items.value.map((it) => (
            <Button key={it} {...getItemProps(it)}>
              {renderItem(it)}
            </Button>
          ))}
        </ButtonGroup>
      );
    };
  },
});
