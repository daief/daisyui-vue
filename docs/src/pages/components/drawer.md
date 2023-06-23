# Drawer

## Examples

global drawer, mouts on body. content has a animation.

```tsx :::run
import { ref } from 'vue';

export default {
  setup: () => {
    const isOpen = ref(false);
    const toggle = () => (isOpen.value = !isOpen.value);

    const slots = {
      default: () => (
        <div class="dv-bgbase100 w-80 py-4">
          <dv-menu>
            <dv-menu-item>item1</dv-menu-item>
            <dv-menu-item>item2</dv-menu-item>
            <dv-menu-item>item3</dv-menu-item>
          </dv-menu>
        </div>
      ),
      content: () => (
        <div class="rounded-lg shadow dv-bgbase200 h-52 flex justify-center items-center">
          <dv-button onClick={toggle} type="primary">
            open
          </dv-button>
        </div>
      ),
    };

    return () => (
      <dv-drawer open={isOpen.value} onClose={toggle} v-slots={slots} />
    );
  },
};
```

drawer disable teleport

```tsx :::run
import { ref } from 'vue';
export default {
  setup: () => {
    const isOpen = ref(false);
    const toggle = () => (isOpen.value = !isOpen.value);

    const slots = {
      default: () => (
        <div class="dv-bgbase100 w-80 py-4">
          <dv-menu class="px-4">
            <dv-menu-item>item1</dv-menu-item>
            <dv-menu-item>item2</dv-menu-item>
            <dv-menu-item>item3</dv-menu-item>
          </dv-menu>
        </div>
      ),
      content: () => (
        <div class="h-full flex justify-center items-center">
          <dv-button onClick={toggle} type="primary">
            open
          </dv-button>
        </div>
      ),
    };

    return () => (
      <div class="w-full">
        <dv-drawer
          open={isOpen.value}
          disableTeleport
          onClose={toggle}
          class="rounded-lg shadow dv-bgbase200 h-52"
          v-slots={slots}
        />
      </div>
    );
  },
};
```

sliding drawer for mobile only (via flattern)

```tsx :::run
import { ref, computed } from 'vue';
import { useBreakPointLte } from 'daisyui-vue';

export default {
  setup: () => {
    const isOpen = ref(false);
    const toggle = () => (isOpen.value = !isOpen.value);
    const isMobile = useBreakPointLte('sm');

    const slots = {
      default: () => (
        <div class="dv-bgbase100 w-80 py-4 border-r dv-borderbase100">
          <dv-menu class="px-4">
            <dv-menu-item>item1</dv-menu-item>
            <dv-menu-item>item2</dv-menu-item>
            <dv-menu-item>item3</dv-menu-item>
          </dv-menu>
        </div>
      ),
      content: () => (
        <div class="h-full flex justify-center items-center text-center">
          {isMobile.value ? (
            <div class="px-5">
              <p>
                Menu can be toggled on mobile size.
                <br />
                Resize the browser to see fixed sidebar on desktop size
              </p>
              <dv-button onClick={toggle} type="primary">
                open
              </dv-button>
            </div>
          ) : (
            <p class="px-5">
              Menu is always open on desktop size. Resize the browser to see
              toggle button on mobile size
            </p>
          )}
        </div>
      ),
    };

    return () => (
      <dv-drawer
        open={isOpen.value}
        disableTeleport
        flattern={!isMobile.value}
        onClose={toggle}
        class="rounded-lg shadow dv-bgbase200 h-52"
        v-slots={slots}
      />
    );
  },
};
```

navbar menu for desktop + drawer for mobile

```tsx :::run
import { ref, computed } from 'vue';
import { useBreakPointLte } from 'daisyui-vue';

export default {
  setup: () => {
    const isOpen = ref(false);
    const toggle = () => (isOpen.value = !isOpen.value);
    const isMobile = useBreakPointLte('sm');

    const slots = {
      default: () => (
        <div class="dv-bgbase100 w-80 py-4 border-r dv-borderbase100">
          <dv-menu class="p-">
            <dv-menu-item>item1</dv-menu-item>
            <dv-menu-item>item2</dv-menu-item>
            <dv-menu-item>item3</dv-menu-item>
          </dv-menu>
        </div>
      ),
      content: () => (
        <dv-navbar class="dv-bgbase300">
          {isMobile.value ? (
            <div class="flex-none">
              <dv-button onClick={toggle} type="ghost">
                <icon-menu size="1.5em" />
              </dv-button>
            </div>
          ) : null}
          <div class="flex-1 mx-2"> Change screen size to show/hide menu </div>
          {!isMobile.value ? (
            <div class="flex-none">
              <dv-menu class="p-2" horizontal>
                <dv-menu-item>item1</dv-menu-item>
                <dv-menu-item>item2</dv-menu-item>
                <dv-menu-item>item3</dv-menu-item>
              </dv-menu>
            </div>
          ) : null}
        </dv-navbar>
      ),
    };
    return () => (
      <dv-drawer
        open={isOpen.value}
        disableTeleport
        onClose={toggle}
        class="rounded-lg shadow dv-bgbase200 h-52"
        v-slots={slots}
      />
    );
  },
};
```

drawer right

```tsx :::run
import { ref, computed } from 'vue';
import { useBreakPointLte } from 'daisyui-vue';

export default {
  setup: () => {
    const isOpen = ref(false);
    const toggle = () => (isOpen.value = !isOpen.value);
    return () => (
      <>
        <div class="w-full text-center">
          <dv-button onClick={toggle} type="primary">
            open
          </dv-button>
        </div>
        <dv-drawer open={isOpen.value} onClose={toggle} placement="right">
          <div class="bg-white w-80 py-4">
            <dv-menu>
              <dv-menu-item>item1</dv-menu-item>
              <dv-menu-item>item2</dv-menu-item>
              <dv-menu-item>item3</dv-menu-item>
            </dv-menu>
          </div>
        </dv-drawer>
      </>
    );
  },
};
```

## Drawer

### Attributes

| name            | description                      | type        | default |
| --------------- | -------------------------------- | ----------- | ------- |
| open            | drawer open/close status         | boolean     | -       |
| disableTeleport | disable teleport behavior        | boolean     | -       |
| flattern        | make drawer to be always visible | boolean     | -       |
| placement       | drawer open position             | left, right | left    |

### Events

| name  | description        | type     | default |
| ----- | ------------------ | -------- | ------- |
| close | drawer close event | function | -       |

### Slots

| name    | description         |
| ------- | ------------------- |
| default | drawer side content |
| content | drawer content      |
