<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Tabs, Tab } from 'daisyui-vue';

export default defineComponent({
  name: 'Playground',
  props: {
    code: String,
  },
  setup: (props, { slots }) => {
    const currentTab = ref('preview');

    return () => (
      <div class="py-2">
        <Tabs type="lifted" v-model={[currentTab.value, 'value']}>
          <Tab name="preview" title="Preview">
            {slots.default?.()}
          </Tab>
          <Tab name="code" title="Code">
            <pre>
              <code
                class="hljs language-html"
                hljs-language="html"
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
