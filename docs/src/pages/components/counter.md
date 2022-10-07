# Counter

## Examples

Counter

```html :::demo
<div>
  <dv-counter :from="59" :to="0" :duration="60000" :transitionDuration="1000" />
</div>
```

Large text

```html :::demo
<div class="text-6xl">
  <dv-counter
    :from="3600 * 3.5"
    :to="0"
    :duration="3600 * 3.5 * 1000"
    :format="(v) => `${String(Math.trunc(v / 3600)).padStart(2, '0')}h${String(Math.trunc(v % 3600 / 60)).padStart(2, '0')}m${String(v % 60).padStart(2, '0')}s`"
    :transitionDuration="1000"
  />
</div>
```

Increase

```html :::demo
<div class="text-2xl">
  <dv-counter :from="0" :to="3000" :duration="2000" />
</div>
```

## Counter

### Attributes

| name               | description             | type              | default |
| ------------------ | ----------------------- | ----------------- | ------- |
| from               | start value             | number            | -       |
| to                 | end value               | number            | -       |
| duration           | duration                | number            | -       |
| format             | control how to display  | (value) => string | -       |
| transitionDuration | css transition duration | number            | 0       |
