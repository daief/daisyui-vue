<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Tabs, Tab } from 'daisyui-vue';

export default defineComponent({
  name: 'Playground',
  props: {
    code: String,
    lang: { type: String, default: 'html' },
  },
  setup: (props, { slots }) => {
    const currentTab = ref('preview');

    return () => (
      <div class="dv-playground py-2">
        <Tabs type="lifted" v-model={[currentTab.value, 'value']}>
          <Tab name="preview" title="Preview">
            <div class="preview-demo-wrap p-4 rounded-md">
              {slots.default?.()}
            </div>
          </Tab>
          <Tab name="code" title="Code">
            <pre>
              <code
                class={`hljs language-${props.lang} rounded-md`}
                hljs-language={props.lang}
                innerHTML={props.code}
              ></code>
            </pre>
          </Tab>
        </Tabs>
      </div>
    );
  },
});
</script>

<style lang="less" scoped>
.dv-playground {
  margin-bottom: 1em;
}
.preview-demo-wrap {
  background-image: radial-gradient(
    hsla(var(--bc) / 0.2) 0.5px,
    hsla(var(--b2) / 1) 0.5px
  );
  background-size: 5px 5px;
}
</style>

<style lang="less"></style>
