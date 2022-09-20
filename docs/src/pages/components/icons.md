# Icons

Icons of this library are based on [xicons](https://github.com/07akioni/xicons) [ionicons5](https://www.xicons.org).

```html :::run
<script lang="ts" setup>
  import {
    IconAtOutline,
    IconTvOutline,
    IconAddOutline,
    IconBagOutline,
    IconBanOutline,
  } from 'daisyui-vue';
</script>

<template>
  <div class="space-x-2">
    <IconAtOutline class="text-sm" />
    <IconTvOutline class="text-base" />
    <IconAddOutline class="text-xl" />
    <IconBagOutline class="text-2xl" />
    <IconBanOutline class="text-3xl" />
  </div>
</template>
```

`xicons` is also recommended for more icons.

```html :::run
<script setup lang="ts">
  import {
    Info24Regular,
    Warning24Regular,
    CheckmarkCircle24Regular,
    ErrorCircle24Regular,
    Alert24Regular,
  } from '@vicons/fluent';
  import { Icon } from 'daisyui-vue';
</script>

<template>
  <div class="space-x-2">
    <Icon :size="24"> <Info24Regular /></Icon>
    <Icon :size="28"> <Warning24Regular /></Icon>
    <Icon :size="32"> <CheckmarkCircle24Regular /></Icon>
    <Icon :size="36"> <ErrorCircle24Regular /></Icon>
    <Icon :size="40"> <Alert24Regular /></Icon>
  </div>
</template>
```

## Icon

### Attributes

| name  | description  | type           | default |
| ----- | ------------ | -------------- | ------- |
| color | icon color   | string         | -       |
| size  | icon size    | number, string | -       |
| tag   | wrap element | string         | span    |

### Slots

| name    | description  |
| ------- | ------------ |
| default | svg children |
