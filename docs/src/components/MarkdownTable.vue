<script lang="tsx">
import { defineComponent } from 'vue';
import { Table } from 'daisyui-vue';

export default defineComponent({
  name: 'MarkdownTable',
  props: {
    columns: Array,
    dataSource: Array,
  },
  setup: (props, { slots }) => {
    return () => (
      <div class="overflow-x-auto">
        <Table compact class="dv-markdowntable w-full" {...props} />
      </div>
    );
  },
});
</script>

<style lang="less" scoped>
.dv-markdowntable {
  @apply my-4;
}
</style>
