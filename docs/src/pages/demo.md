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

    const arr = [1, 2, 3];

    return () => (
      <dv-space>
        I'm a text
        {null}
        {false}
        {0}
        {'a'}
        <dv-button>button</dv-button>
        <>
          {arr.map((it) => (
            <div>{it}</div>
          ))}
          asd
          {arr.map((it) => (
            <div>{it}2</div>
          ))}
        </>
      </dv-space>
    );
  },
};
```
