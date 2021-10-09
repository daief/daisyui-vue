# Tab

## Examples

tabs

```tsx :::run
import { Tabs, Tab } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');

    return () => (
      <Tabs v-model={[currentTab.value, 'value']}>
        <Tab name="1" title="Tab 1">
          Content 1
        </Tab>
        <Tab name="2" title="Tab 2">
          Content 2
        </Tab>
        <Tab name="3" title="Tab 3">
          Content 3
        </Tab>
      </Tabs>
    );
  },
};
```
