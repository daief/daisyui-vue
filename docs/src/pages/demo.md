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
        <dv-element onClick={console.log} variant="info" class="xs">
          asd
        </dv-element>
      </div>
    );
  },
};
```
