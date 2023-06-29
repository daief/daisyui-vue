<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Tabs, Badge, IconCopyOutline, IconCheckmark } from 'daisyui-vue';

export default defineComponent({
  name: 'Playground',
  props: {
    code: String,
    lang: { type: String, default: 'html' },
  },
  setup: (props, { slots }) => {
    const currentTab = ref('preview');
    const copied = ref(false);
    const codeEl = ref<HTMLDivElement | null>(null);

    const langMap = {
      html: 'vue',
      tsx: 'tsx',
    };

    const items = [
      {
        name: 'preview',
        title: 'Preview',
        content: () => (
          <div class="preview-demo-wrap p-4 rounded-md">
            {slots.default?.()}
          </div>
        ),
      },
      {
        name: 'code',
        title: 'Code',
        content: () => (
          <pre class="code-wrapper">
            <code
              class={`hljs language-${props.lang} rounded-md`}
              hljs-language={props.lang}
              innerHTML={props.code}
              ref={codeEl}
            ></code>
            <div class="code-badges space-x-2 flex">
              <Badge
                variant="info"
                class="cursor-pointer"
                onMouseleave={() => (copied.value = false)}
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    codeEl.value?.textContent || '',
                  );
                  copied.value = true;
                }}
              >
                {copied.value ? <IconCheckmark /> : <IconCopyOutline />}
              </Badge>
              <Badge variant="info">
                {langMap[props.lang] || langMap.html}
              </Badge>
            </div>
          </pre>
        ),
      },
    ];

    return () => (
      <div class="dv-playground py-2">
        <Tabs variant="lifted" v-model={currentTab.value} items={items} />
      </div>
    );
  },
});
</script>

<style lang="less" scoped>
.dv-playground {
  margin-bottom: 1em;

  :deep(.dv-tab-content),
  :deep(.preview-demo-wrap) {
    border-radius: var(--rounded-box, 16px);
    border-top-left-radius: 0;
  }

  :deep(.dv-tab-content) {
    margin-top: 0;
  }

  :deep(.preview-demo-wrap) {
    min-height: 24px;
    background-image: repeating-linear-gradient(
      45deg,
      hsl(var(--b1)),
      hsl(var(--b1)) 13px,
      hsl(var(--b2)) 13px,
      hsl(var(--b2)) 14px
    );
    border-color: hsl(var(--b3));
    @apply border border-t-0;
    @apply flex flex-wrap justify-center items-center;
  }

  :deep(.code-wrapper) {
    position: relative;

    .code-badges {
      @apply absolute top-2 right-2 align-baseline;
    }
  }
}
</style>

<style lang="less"></style>
