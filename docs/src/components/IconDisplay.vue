<script lang="tsx">
import { defineComponent, createVNode } from 'vue';
import * as DV from 'daisyui-vue';

const icons = Object.keys(DV).filter(
  (it) => it.startsWith('Icon') && it !== 'IconBase',
);

export default defineComponent({
  name: 'IconDisplay',
  setup: () => {
    return () => (
      <div class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-7 text-md">
        {icons.map((name) => (
          <div key={name} class="py-4 text-center">
            {createVNode(DV[name], {
              size: '2em',
            })}
            <br />
            <p
              class="mt-1 overflow-ellipsis overflow-hidden whitespace-nowrap"
              title={name}
            >
              {name.replace(/^Icon/, '')}
            </p>
          </div>
        ))}
      </div>
    );
  },
});
</script>

<style scoped lang="less"></style>
