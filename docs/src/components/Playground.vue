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
            {slots.default?.()}
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

<style lang="less">
p + .dv-playground {
  margin-top: -1em;
}

.dv-playground + p {
  margin-top: 1em;
}
</style>
