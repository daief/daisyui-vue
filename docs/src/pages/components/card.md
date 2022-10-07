# Card

## Examples

card

```html :::demo
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <dv-card
    class="bg-base-100"
    bordered
    image="https://placeimg.com/400/225/arch"
    title="Top image"
    description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
  >
    <template v-slot:actions>
      <dv-button type="secondary">More info</dv-button>
    </template>
  </dv-card>

  <dv-card bordered class="bg-base-100">
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
    <dv-card-image src="https://placeimg.com/400/225/arch" />
  </dv-card>

  <dv-card bordered class="bg-base-100">
    <dv-card-image src="https://placeimg.com/400/225/arch" />
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
<dv-card
  class="w-64 max-w-full"
  bordered
  image="https://placeimg.com/400/225/arch"
  title="Image overlay"
  description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
  image-full
>
  <template v-slot:actions>
    <dv-button type="secondary">More info</dv-button>
  </template>
</dv-card>
```

card-compact

```html :::demo
<dv-card
  class="w-64 max-w-full bg-base-100"
  bordered
  image="https://placeimg.com/400/225/arch"
  title="This card is compact"
  description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
  compact
>
  <template v-slot:actions>
    <dv-button type="secondary">More info</dv-button>
  </template>
</dv-card>
```

card with side image

```html :::demo
<dv-card
  class="bg-base-100"
  bordered
  image="https://placeimg.com/400/225/arch"
  title="Horizontal"
  description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
  side
>
  <template v-slot:actions>
    <dv-button type="secondary">More info</dv-button>
  </template>
</dv-card>
```

card without image

```html :::demo
<dv-card
  class="bg-base-100"
  bordered
  title="No Images"
  description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
>
  <template v-slot:actions>
    <dv-button type="secondary">More info</dv-button>
  </template>
</dv-card>
```

glass card

```html :::demo
<div
  class="flex items-center w-full px-4 py-10 bg-cover text-white rounded-lg"
  style="background-image:url(https://placeimg.com/400/225/arch)"
>
  <dv-card
    bordered
    glass
    side
    image="https://placeimg.com/400/225/arch"
    title="Glass"
    description="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
  >
    <dv-card-image class="p-6">
      <img class="rounded-2xl" src="https://placeimg.com/400/225/arch" />
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
