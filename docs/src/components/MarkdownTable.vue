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
    return () => <Table compact class="dv-markdowntable" {...props} />;
  },
});
</script>

<style lang="less" scoped>
.dv-markdowntable {
  @apply my-4;
}
</style>
