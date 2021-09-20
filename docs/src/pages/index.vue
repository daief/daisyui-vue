<script lang="tsx">
import { useHead } from '@vueuse/head';

export default {
  setup() {
    useHead({
      title: 'daisyui-vue',
    });
    return () => (
      <div>
        <h1 class="text-2xl">daisyui vue(WIP)</h1>
        <p class="mt-4">
          Vue3 components base on{' '}
          <a
            href="https://github.com/saadeghi/daisyui"
            class="text-blue-400 underline"
          >
            daisyui
          </a>
          .
        </p>
      </div>
    );
  },
};
</script>
