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
      <div>
        <Tabs v-model={currentTab.value}>
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
      </div>
    );
  },
};
```

tab-bordered

```tsx :::run
import { Tabs, Tab } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    return () => (
      <div>
        <Tabs v-model={currentTab.value} type="bordered">
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
      </div>
    );
  },
};
```

tab-lifted

```tsx :::run
import { Tabs, Tab } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    return () => (
      <div>
        <Tabs v-model={currentTab.value} type="lifted">
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
      </div>
    );
  },
};
```

tab-boxed

```tsx :::run
import { Tabs, Tab } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    return () => (
      <div>
        <Tabs v-model={currentTab.value} type="boxed">
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
      </div>
    );
  },
};
```

size

```tsx :::run
import { Tabs, Tab } from 'daisyui-vue';
import { ref } from 'vue';

export default {
  setup: () => {
    const currentTab = ref('1');
    return () => (
      <div>
        <Tabs v-model={currentTab.value} type="lifted" size="xs">
          <Tab name="1" title="Tiny" />
          <Tab name="2" title="Tiny" />
          <Tab name="3" title="Tiny" />
        </Tabs>
        <Tabs v-model={currentTab.value} type="lifted" size="sm">
          <Tab name="1" title="Small" />
          <Tab name="2" title="Small" />
          <Tab name="3" title="Small" />
        </Tabs>
        <Tabs v-model={currentTab.value} type="lifted" size="md">
          <Tab name="1" title="Normal" />
          <Tab name="2" title="Normal" />
          <Tab name="3" title="Normal" />
        </Tabs>
        <Tabs v-model={currentTab.value} type="lifted" size="lg">
          <Tab name="1" title="Large" />
          <Tab name="2" title="Large" />
          <Tab name="3" title="Large" />
        </Tabs>
      </div>
    );
  },
};
```
