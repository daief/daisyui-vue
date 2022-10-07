# Dropdown

## Examples

Dropdown menu

```html :::demo
<div class="text-center">
  <dv-dropdown triggerAction="click">
    <dv-button>Click</dv-button>
    <template #content>
      <dv-menu class="shadow-lg rounded-lg bg-base-100 p-2 w-56">
        <dv-menu-item>Item 1</dv-menu-item>
        <dv-menu-item>Item 2</dv-menu-item>
      </dv-menu>
    </template>
  </dv-dropdown>
</div>
```

Hover

```html :::demo
<div class="text-center">
  <dv-dropdown triggerAction="hover">
    <dv-button>Hover</dv-button>
    <template #content>
      <dv-menu class="shadow-lg rounded-lg bg-base-100 p-2 w-56">
        <dv-menu-item>Item 1</dv-menu-item>
        <dv-menu-item>Item 2</dv-menu-item>
      </dv-menu>
    </template>
  </dv-dropdown>
</div>
```

placement

```tsx :::run
import { ref } from 'vue';
export default {
  setup: () => {
    const placements = [
      'top-start',
      'top',
      'top-end',

      'bottom-start',
      'bottom',
      'bottom-end',

      'left-start',
      'left',
      'left-end',

      'right-start',
      'right',
      'right-end',
    ];

    const pls = ref(placements[0]);
    const renderType = ref('btn');

    const renderSlice = (n: 0 | 3 | 6 | 9) =>
      placements.slice(n, n + 3).map((plsKey) => (
        <dv-button
          key={plsKey}
          size="xs"
          data-pls={plsKey}
          onClick={() => (pls.value = plsKey)}
          type={plsKey === pls.value ? 'primary' : 'netural'}
        >
          {plsKey}
        </dv-button>
      ));

    return () => (
      <>
        <div class="flex justify-center space-x-3 mb-1">
          <dv-button onClick={() => (renderType.value = 'btn')}>
            button
          </dv-button>
          <dv-button onClick={() => (renderType.value = 'div')}>div</dv-button>
        </div>
        <dv-divider />
        <div class="h-80 relative flex items-center justify-center">
          <dv-dropdown
            content={() => (
              <dv-menu class="shadow-lg rounded-lg bg-base-100 p-1 w-40">
                <dv-menu-item>Item 1</dv-menu-item>
                <dv-menu-item>Item 2</dv-menu-item>
              </dv-menu>
            )}
            open
            placement={pls.value}
          >
            {renderType.value === 'btn' ? (
              <dv-button size="sm">button</dv-button>
            ) : (
              <div class="w-8 h-8 flex items-center justify-center bg-red-400">
                div
              </div>
            )}
          </dv-dropdown>

          {/* top */}
          <div class="absolute top-0 w-full flex justify-center space-x-2">
            {renderSlice(0)}
          </div>
          {/* right */}
          <div class="absolute right-0 h-full flex flex-col justify-center space-y-2">
            {renderSlice(9)}
          </div>
          {/* bottom */}
          <div class="absolute bottom-0 w-full flex justify-center space-x-2">
            {renderSlice(3)}
          </div>
          {/* left */}
          <div class="absolute left-0 h-full flex flex-col justify-center space-y-2">
            {renderSlice(6)}
          </div>
        </div>
      </>
    );
  },
};
```

Dropdown card

```html :::demo
<div class="text-center">
  <dv-dropdown>
    <dv-button>Hover</dv-button>
    <template #content>
      <dv-card bordered class="w-64 bg-base-100">
        <dv-card-body>
          <dv-card-title>Card Title</dv-card-title>
          <p> you can use any element as a dropdown. </p>
        </dv-card-body>
      </dv-card>
    </template>
  </dv-dropdown>
</div>
```

## Dropdown

### Attributes

Attributes are same as `Popper`.
