<script lang="tsx">
import { defineComponent, createVNode } from 'vue';
import {
  IconAtOutline,
  IconTvOutline,
  IconAddOutline,
  IconBagOutline,
  IconBanOutline,
} from 'daisyui-vue';

const icons = [
  IconAtOutline,
  IconTvOutline,
  IconAddOutline,
  IconBagOutline,
  IconBanOutline,
];

export default defineComponent({
  name: 'IconDisplay',
  setup: () => {
    return () => (
      <div class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-7 text-md">
        {icons.map((icon, idx) => (
          <div key={idx} class="py-4 text-center">
            {createVNode(icon, {
              size: '2em',
            })}
            <br />
            <p
              class="mt-1 overflow-ellipsis overflow-hidden whitespace-nowrap"
              title={icon.name}
            >
              {icon.name.replace(/^Icon/, '')}
            </p>
          </div>
        ))}
      </div>
    );
  },
});
</script>

<style scoped lang="less"></style>
