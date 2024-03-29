# TabPanel

## Examples

tabs

```tsx :::run
import { Tabs, TabPanel } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    return () => (
      <div>
        <Tabs v-model={currentTab.value}>
          <TabPanel name="1" title="TabPanel 1">
            Content 1
          </TabPanel>
          <TabPanel name="2" title="TabPanel 2">
            Content 2
          </TabPanel>
          <TabPanel name="3" title="TabPanel 3">
            Content 3
          </TabPanel>
        </Tabs>
      </div>
    );
  },
};
```

custom title

```tsx :::run
import { Tabs, TabPanel } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    const renderTitle = () => <a style="color: red">Render Props</a>;
    const vNode = <a style="color: orange">VNode As Props</a>;
    const slots = {
      default: () => 'Content 3',
      title: () => <a style="color: blue">Title Slot</a>,
    };
    return () => (
      <div>
        <Tabs v-model={currentTab.value}>
          <TabPanel name="1" title={renderTitle}>
            Content 1
          </TabPanel>
          <TabPanel name="2" title={vNode}>
            Content 2
          </TabPanel>
          <TabPanel name="3" v-slots={slots}></TabPanel>
        </Tabs>
      </div>
    );
  },
};
```

tab-bordered

```tsx :::run
import { Tabs, TabPanel } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    return () => (
      <div>
        <Tabs v-model={currentTab.value} variant="bordered">
          <TabPanel name="1" title="TabPanel 1">
            Content 1
          </TabPanel>
          <TabPanel name="2" title="TabPanel 2">
            Content 2
          </TabPanel>
          <TabPanel name="3" title="TabPanel 3">
            Content 3
          </TabPanel>
        </Tabs>
      </div>
    );
  },
};
```

tab-lifted

```tsx :::run
import { Tabs, TabPanel } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    return () => (
      <div>
        <Tabs v-model={currentTab.value} variant="lifted">
          <TabPanel name="1" title="TabPanel 1">
            Content 1
          </TabPanel>
          <TabPanel name="2" title="TabPanel 2">
            Content 2
          </TabPanel>
          <TabPanel name="3" title="TabPanel 3">
            Content 3
          </TabPanel>
        </Tabs>
      </div>
    );
  },
};
```

tab-boxed

```tsx :::run
import { Tabs, TabPanel } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    return () => (
      <div>
        <Tabs v-model={currentTab.value} variant="boxed">
          <TabPanel name="1" title="TabPanel 1">
            Content 1
          </TabPanel>
          <TabPanel name="2" title="TabPanel 2">
            Content 2
          </TabPanel>
          <TabPanel name="3" title="TabPanel 3">
            Content 3
          </TabPanel>
        </Tabs>
      </div>
    );
  },
};
```

size

```tsx :::run
import { Tabs, TabPanel } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    return () => (
      <div>
        <Tabs v-model={currentTab.value} variant="lifted" size="xs">
          <TabPanel name="1" title="Tiny" />
          <TabPanel name="2" title="Tiny" />
          <TabPanel name="3" title="Tiny" />
        </Tabs>
        <Tabs v-model={currentTab.value} variant="lifted" size="sm">
          <TabPanel name="1" title="Small" />
          <TabPanel name="2" title="Small" />
          <TabPanel name="3" title="Small" />
        </Tabs>
        <Tabs v-model={currentTab.value} variant="lifted" size="md">
          <TabPanel name="1" title="Normal" />
          <TabPanel name="2" title="Normal" />
          <TabPanel name="3" title="Normal" />
        </Tabs>
        <Tabs v-model={currentTab.value} variant="lifted" size="lg">
          <TabPanel name="1" title="Large" />
          <TabPanel name="2" title="Large" />
          <TabPanel name="3" title="Large" />
        </Tabs>
      </div>
    );
  },
};
```

## Tabs

### Attributes

| name    | description | type                    | default  |
| ------- | ----------- | ----------------------- | -------- |
| variant | tabs type   | bordered, lifted, boxed | bordered |
| size    | tabs size   | ISize                   | md       |
| v-model | tabs value  | -                       | -        |

## TabPanel

### Attributes

| name  | description | type                   | default |
| ----- | ----------- | ---------------------- | ------- |
| title | tab title   | IText, VNode, Function | -       |
| name  | name of tab | IText                  | -       |

### Slots

| name    | description |
| ------- | ----------- |
| default | tab content |
| title   | tab title   |
