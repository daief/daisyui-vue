# Avatar

## Examples

avatar

```html :::demo
<div class="flex items-center space-x-8 flex-wrap">
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="96px"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="lg"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="md"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="sm"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="xs"
  />
</div>
```

avatar with mask

```html :::demo
<div class="flex items-center space-x-8 flex-wrap">
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    type="circle"
    size="lg"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    type="squircle"
    size="lg"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    type="hexagon"
    size="lg"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    type="decagon"
    size="lg"
  />
</div>
```

avatar with border(by css). Circle & square types only, but the others are not supported

```html :::demo
<div class="w-full flex justify-center items-center space-x-8 flex-wrap mb-8">
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="lg"
    class="ring ring-pink-600 ring-offset-4"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="md"
    class="ring ring-pink-600 ring-offset-4"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="sm"
    class="ring ring-pink-600 ring-offset-4"
  />
</div>
<div class="w-full flex justify-center items-center space-x-8 flex-wrap">
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="lg"
    class="ring ring-pink-600 ring-offset-4"
    type="square"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="md"
    class="ring ring-pink-600 ring-offset-4"
    type="square"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="sm"
    class="ring ring-pink-600 ring-offset-4"
    type="square"
  />
</div>
```

avatar-group, default gap(half size)

```html :::demo
<div class="flex flex-col items-center">
  <dv-avatar-group size="lg" class="mb-4">
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
    <dv-avatar placeholder="+99" />
  </dv-avatar-group>
  <dv-avatar-group size="md" class="mb-4">
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
  </dv-avatar-group>
  <dv-avatar-group size="sm" class="mb-4">
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
  </dv-avatar-group>
  <dv-avatar-group size="xs" class="mb-4">
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
    <dv-avatar
      src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    />
  </dv-avatar-group>
</div>
```

avatar-group, custom gap

```html :::demo
<dv-avatar-group size="80px" :gap="50">
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
  />
  <dv-avatar placeholder>
    <span class="text-xl">+99</span>
  </dv-avatar>
</dv-avatar-group>
```

avatar with presense indicator

```html :::demo
<div class="w-full flex justify-center items-center space-x-8 flex-wrap mb-4">
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="lg"
    status="online"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="md"
    status="online"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="sm"
    status="offline"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="xs"
    status="offline"
  />
</div>

<div class="w-full flex justify-center items-center space-x-8 flex-wrap">
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="lg"
    status="offline"
    type="squircle"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="md"
    status="offline"
    type="squircle"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="sm"
    status="online"
    type="squircle"
  />
  <dv-avatar
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
    size="xs"
    status="online"
    type="squircle"
  />
</div>
```

avatar placeholder

```html :::demo
<div class="flex items-center space-x-8 flex-wrap">
  <dv-avatar size="lg" status="offline" type="squircle" placeholder>
    <span class="text-2xl">+99</span>
  </dv-avatar>
  <dv-avatar size="md" status="offline" placeholder="JO" />
  <dv-avatar size="sm" placeholder="MX" />
  <dv-avatar size="xs" placeholder type="circle">
    <span class="text-xs">AA</span>
  </dv-avatar>
</div>
```

## Avatar

### Attributes

| name        | description                                       | type                                                                                                                                                                                                          | default |
| ----------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| src         | avatar img source                                 | string                                                                                                                                                                                                        | -       |
| placeholder | to show some letters as avatar placeholder source | string                                                                                                                                                                                                        | -       |
| size        | size                                              | ISize                                                                                                                                                                                                         | md      |
| type        | mask type                                         | squircle, heart, hexagon, hexagon-2, decagon, pentagon, diamond, square, circle, parallelogram, parallelogram-2, parallelogram-3, parallelogram-4, star, star-2, triangle, triangle-2, triangle-3, triangle-4 | circle  |
| status      | shows online/offline indicator                    | online, offline                                                                                                                                                                                               | -       |

## AvatarGroup

### Attributes

| name | description | type           | default |
| ---- | ----------- | -------------- | ------- |
| size | size        | ISize          | md      |
| gap  | avatar gap  | string, number | -       |
