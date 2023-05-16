# Drawer

<script setup lang="ts">
  import { ref } from 'vue';

  const open = ref(null);

  function setOpen(type) {
    open.value = type;
  }

  function close() {
    open.value = null;
  }

  function isOpen(type) {
    return open.value === type;
  }
</script>

## Examples

```html
<script setup lang="ts">
  import { ref } from 'vue';

  const open = ref(null);

  function setOpen(type) {
    open.value = type;
  }

  function close() {
    open.value = null;
  }

  function isOpen(type) {
    return open.value === type;
  }
</script>
```

global drawer, mouts on body. content has a animation.

```html :::demo
<dv-drawer :open="isOpen('d1')" @close="close">
  <div class="dv-bgbase100 w-80 py-4">
    <dv-menu>
      <dv-menu-item>item1</dv-menu-item>
      <dv-menu-item>item2</dv-menu-item>
      <dv-menu-item>item3</dv-menu-item>
    </dv-menu>
  </div>
  <template v-slot:content>
    <div
      class="rounded-lg shadow dv-bgbase200 h-52 flex justify-center items-center"
    >
      <dv-button :onClick="() => setOpen('d1')" type="primary">open</dv-button>
    </div>
  </template>
</dv-drawer>
```

drawer disable teleport

```html :::demo
<div class="w-full">
  <dv-drawer
    :open="isOpen('d2')"
    disableTeleport
    @close="close"
    class="rounded-lg shadow dv-bgbase200 h-52"
  >
    <template v-slot:default>
      <div class="dv-bgbase100 w-80 py-4">
        <dv-menu class="px-4">
          <dv-menu-item>item1</dv-menu-item>
          <dv-menu-item>item2</dv-menu-item>
          <dv-menu-item>item3</dv-menu-item>
        </dv-menu>
      </div>
    </template>
    <template v-slot:content>
      <div class="h-full flex justify-center items-center">
        <dv-button :onClick="() => setOpen('d2')" type="primary">
          open
        </dv-button>
      </div>
    </template>
  </dv-drawer>
</div>
```

sliding drawer for mobile only

```html :::demo
<dv-drawer
  :open="isOpen('d3')"
  disableTeleport
  mobileOnly
  @close="close"
  class="rounded-lg shadow dv-bgbase200 h-52"
>
  <template v-slot:default>
    <div class="dv-bgbase100 w-80 py-4 border-r dv-borderbase100">
      <dv-menu class="px-4">
        <dv-menu-item>item1</dv-menu-item>
        <dv-menu-item>item2</dv-menu-item>
        <dv-menu-item>item3</dv-menu-item>
      </dv-menu>
    </div>
  </template>
  <template v-slot:content>
    <div class="h-full flex justify-center items-center text-center">
      <p class="hidden lg:block px-5">
        Menu is always open on desktop size. Resize the browser to see toggle
        button on mobile size
      </p>
      <div class="lg:hidden px-5">
        <p
          >Menu can be toggled on mobile size.
          <br />
          Resize the browser to see fixed sidebar on desktop size
        </p>
        <dv-button :onClick="() => setOpen('d3')" type="primary">
          open
        </dv-button>
      </div>
    </div>
  </template>
</dv-drawer>
```

navbar menu for desktop + drawer for mobile

```html :::demo
<dv-drawer
  :open="isOpen('d4')"
  disableTeleport
  @close="close"
  class="rounded-lg shadow dv-bgbase200 h-52"
>
  <template v-slot:default>
    <div class="dv-bgbase100 w-80 py-4 border-r dv-borderbase100">
      <dv-menu class="p-">
        <dv-menu-item>item1</dv-menu-item>
        <dv-menu-item>item2</dv-menu-item>
        <dv-menu-item>item3</dv-menu-item>
      </dv-menu>
    </div>
  </template>
  <template v-slot:content>
    <dv-navbar class="dv-bgbase300">
      <div class="flex-none lg:hidden">
        <dv-button :onClick="() => setOpen('d4')" type="ghost">
          <icon-menu size="1.5em" />
        </dv-button>
      </div>
      <div class="flex-1 mx-2"> Change screen size to show/hide menu </div>
      <div class="flex-none hidden lg:block">
        <dv-menu class="p-2" horizontal>
          <dv-menu-item>item1</dv-menu-item>
          <dv-menu-item>item2</dv-menu-item>
          <dv-menu-item>item3</dv-menu-item>
        </dv-menu>
      </div>
    </dv-navbar>
  </template>
</dv-drawer>
```

drawer right

```html :::demo
<div class="w-full text-center">
  <dv-button :onClick="() => setOpen('d5')" type="primary">open</dv-button>
</div>
<dv-drawer :open="isOpen('d5')" @close="close" placement="right">
  <div class="bg-white w-80 py-4">
    <dv-menu>
      <dv-menu-item>item1</dv-menu-item>
      <dv-menu-item>item2</dv-menu-item>
      <dv-menu-item>item3</dv-menu-item>
    </dv-menu>
  </div>
</dv-drawer>
```

## Drawer

### Attributes

| name            | description                                                                | type        | default |
| --------------- | -------------------------------------------------------------------------- | ----------- | ------- |
| open            | drawer open/close status                                                   | boolean     | -       |
| disableTeleport | disable teleport behavior                                                  | boolean     | -       |
| mobileOnly      | makes drawer to open/close on mobile but will be always visible on desktop | boolean     | -       |
| placement       | drawer open position                                                       | left, right | left    |
| placement       | drawer open position                                                       | left, right | left    |

### Events

| name  | description        | type     | default |
| ----- | ------------------ | -------- | ------- |
| close | drawer close event | function | -       |

### Slots

| name    | description         |
| ------- | ------------------- |
| default | drawer side content |
| content | drawer content      |
