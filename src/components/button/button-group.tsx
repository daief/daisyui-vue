import { defineComponent, HTMLAttributes } from 'vue';

// TODO 透传 size
export const ButtonGroup = defineComponent<HTMLAttributes>({
  name: 'ButtonGroup',
  setup: (_, { slots }) => {
    return () => (
      <div class="btn-group">{slots.default ? slots.default() : null}</div>
    );
  },
});
