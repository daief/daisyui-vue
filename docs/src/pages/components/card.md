# Card

## Examples

card

```html :::demo
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <dv-card
    bordered
    image="https://picsum.photos/id/1005/400/250"
    title="Top image"
    description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
  >
    <template v-slot:actions>
      <dv-button type="secondary">More info</dv-button>
    </template>
  </dv-card>

  <dv-card bordered>
    <dv-card-body>
      <dv-card-title> Image bottom </dv-card-title>
      <p>
        Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
        necessitatibus veritatis sed molestiae voluptates incidunt iure
        sapiente.
      </p>
      <dv-card-actions>
        <dv-button type="primary">Login</dv-button>
        <dv-button type="ghost">Register</dv-button>
      </dv-card-actions>
    </dv-card-body>
    <dv-card-image src="https://picsum.photos/id/1005/400/250" />
  </dv-card>

  <dv-card bordered>
    <dv-card-image src="https://picsum.photos/id/1005/60/40" />
    <dv-card-body>
      <dv-card-title> Small image file </dv-card-title>
      <p>
        Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
        necessitatibus veritatis sed molestiae voluptates incidunt iure
        sapiente.
      </p>
      <dv-card-actions>
        <dv-badge type="ghost">Article</dv-badge>
        <dv-badge type="ghost">Photography</dv-badge>
      </dv-card-actions>
    </dv-card-body>
  </dv-card>
</div>
```

image-full

```html :::demo
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <dv-card
    bordered
    image="https://picsum.photos/id/1005/400/250"
    title="Image overlay"
    description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
    image-full
  >
    <template v-slot:actions>
      <dv-button type="secondary">More info</dv-button>
    </template>
  </dv-card>
</div>
```

card-compact

```html :::demo
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <dv-card
    bordered
    image="https://picsum.photos/id/1005/400/250"
    title="This card is compact"
    description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
    compact
  >
    <template v-slot:actions>
      <dv-button type="secondary">More info</dv-button>
    </template>
  </dv-card>
</div>
```

card with side image

```html :::demo
<div>
  <dv-card
    bordered
    image="https://picsum.photos/id/1005/400/250"
    title="Horizontal"
    description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
    side
  >
    <template v-slot:actions>
      <dv-button type="secondary">More info</dv-button>
    </template>
  </dv-card>
</div>
```

card without image

```html :::demo
<div>
  <dv-card
    bordered
    title="No Images"
    description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
  >
    <template v-slot:actions>
      <dv-button type="secondary">More info</dv-button>
    </template>
  </dv-card>
</div>
```

glass card

```html :::demo
<div
  class="flex items-center w-full px-4 py-10 bg-cover text-white rounded-lg"
  style="background-image:url(https://picsum.photos/id/314/1000/300)"
>
  <dv-card
    bordered
    glass
    side
    image="https://picsum.photos/id/1005/300/200"
    title="Glass"
    description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
  >
    <dv-card-image class="p-6">
      <img class="rounded-2xl" src="https://picsum.photos/id/1005/300/200" />
    </dv-card-image>
    <dv-card-body>
      <dv-card-title> Glass </dv-card-title>
      <p>
        Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
        necessitatibus veritatis sed molestiae voluptates incidunt iure
        sapiente.
      </p>
      <dv-card-actions>
        <dv-button type="glass">More info</dv-button>
      </dv-card-actions>
    </dv-card-body>
  </dv-card>
</div>
```

## Card

### Attributes

| name        | description                                        | type    | default |
| ----------- | -------------------------------------------------- | ------- | ------- |
| bordered    | adds border to card                                | boolean | true    |
| side        | the image in figure will be on to the side         | boolean | false   |
| imageFull   | the image in figure element will be the background | boolean | false   |
| compact     | applies smaller padding                            | boolean | false   |
| glass       | applies glass style                                | boolean | false   |
| image       | image url of card (works when no default solt)     | string  | -       |
| title       | title of card (works when no default solt)         | string  | -       |
| description | description of card (works when no default solt)   | string  | -       |

### Slots

| name    | description                                                   |
| ------- | ------------------------------------------------------------- |
| default | card content                                                  |
| actions | card actions(this works only when slots.default is undefined) |

## CardImage

### Attributes

| name | description       | type   | default |
| ---- | ----------------- | ------ | ------- |
| src  | image url of card | string | -       |

## CardBody

### Attributes

`-`

## CardTitle

### Attributes

| name      | description                   | type   | default |
| --------- | ----------------------------- | ------ | ------- |
| component | the rendered element of title | string | h2      |

## CardActions

### Attributes

`-`
