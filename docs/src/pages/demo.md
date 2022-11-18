# Demo for development

```tsx :::run
import { Tabs, TabPanel } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    const slots = {
      default: () => 'Content 3',
      title: () => <a style="color: blue">Title Slot</a>,
    };

    return () => (
      <div>
        <Tabs v-model={currentTab.value}>
          <TabPanel
            name="1"
            title={() => <a style="color: red">Render Props</a>}
          >
            Content 1
          </TabPanel>
          <TabPanel
            name="2"
            title={<a style="color: orange">VNode As Props</a>}
          >
            Content 2
          </TabPanel>
          <TabPanel name="3">{slots}</TabPanel>
        </Tabs>
      </div>
    );
  },
};
```
