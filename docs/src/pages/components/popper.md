# Popper

## Examples

hover

```html :::demo
<div class="p-6 text-center">
  <dv-popper
    triggerAction="hover"
    content="This is a tooltip."
    placement="right"
  >
    <dv-button>Hover Me</dv-button>
  </dv-popper>
</div>
```

click

```html :::demo
<div class="p-6 text-center">
  <dv-popper
    triggerAction="click"
    content="This is a tooltip."
    placement="right"
  >
    <dv-button>Click Me</dv-button>
  </dv-popper>
</div>
```

focus

```html :::demo
<div class="p-6 text-center">
  <dv-popper
    triggerAction="focus"
    content="This is a tooltip."
    placement="right"
  >
    <input placeholder="Focus me" />
  </dv-popper>
</div>
```

right click

```html :::demo
<div class="p-6 text-center">
  <dv-popper
    triggerAction="contextMenu"
    content="This is a tooltip."
    placement="right"
  >
    <dv-button>Right click Me</dv-button>
  </dv-popper>
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

    const showArrow = ref(true);

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
          <input
            type="checkbox"
            checked={showArrow.value}
            onChange={(e) => {
              showArrow.value = e.target.checked;
            }}
          />
        </div>
        <dv-divider />
        <div class="h-56 relative flex items-center justify-center">
          <dv-popper
            content={() => (
              <div>
                This is a <strong>tooltip</strong>
              </div>
            )}
            open
            placement={pls.value}
            hideArrow={!showArrow.value}
          >
            {renderType.value === 'btn' ? (
              <dv-button size="sm">button</dv-button>
            ) : (
              <div class="w-8 h-8 flex items-center justify-center bg-red-400">
                div
              </div>
            )}
          </dv-popper>

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

render props

```tsx :::run
export default {
  setup: () => {
    return () => (
      <div class="p-6 text-center">
        <dv-popper
          content={() => (
            <div>
              This is a <strong>tooltip</strong>
            </div>
          )}
          placement="right"
        >
          <dv-button>Hover Me</dv-button>
        </dv-popper>
      </div>
    );
  },
};
```

jsx slots

```tsx :::run
export default {
  setup: () => {
    return () => (
      <div class="p-6 text-center">
        <dv-popper placement="right">
          {{
            default: () => <dv-button>Hover Me</dv-button>,
            content: () => (
              <div>
                This is a <strong>tooltip</strong>
              </div>
            ),
          }}
        </dv-popper>
      </div>
    );
  },
};
```

template slots

```html :::demo
<div class="p-6 text-center">
  <dv-popper placement="right">
    <template v-slot:default>
      <dv-button>Hover Me</dv-button>
    </template>
    <template v-slot:content>
      <div> This is a <strong>tooltip</strong> </div>
    </template>
  </dv-popper>
</div>
```

## Popper

### Attributes

| name               | description                          | type                             | default |
| ------------------ | ------------------------------------ | -------------------------------- | ------- |
| content            | popper content                       | any, function                    | -       |
| open               | popper open status                   | boolean                          | -       |
| placement          | popper placement                     | Placement                        | auto    |
| disableTeleport    | disable popper node teleport to body | boolean                          | false   |
| disabled           | disable popper                       | boolean                          | false   |
| onChange           | emitted whe popper status change     | function                         | -       |
| triggerAction      | the action to tigger popper          | contextMenu, hover, click, focus | hover   |
| outsideCloseable   | click outside to close popper        | boolean                          | true    |
| escapeKeyCloseable | press escape to close popper         | boolean                          | true    |

### Slots

| name    | description      |
| ------- | ---------------- |
| default | popper reference |
| content | popper content   |
