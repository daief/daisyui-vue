<script lang="tsx">
import { useHead } from '@vueuse/head';

export default {
  setup() {
    useHead({
      title: 'daisyui-vue',
    });
    return () => 'Index';
  },
};
</script>
