# Mask

## Examples

mask

```tsx :::run
export default {
  setup: () => {
    const types = [
      'squircle',
      'heart',
      'hexagon',
      'hexagon-2',
      'decagon',
      'pentagon',
      'diamond',
      'square',
      'circle',
      'parallelogram',
      'parallelogram-2',
      'parallelogram-3',
      'parallelogram-4',
      'star',
      'star-2',
      'triangle',
      'triangle-2',
      'triangle-3',
      'triangle-4',
    ];
    return () => (
      <div>
        {types.map((type) => (
          <div key={type}>
            <p class="my-2">mask-{type}</p>
            <dv-mask type={type} class="mb-8">
              <img src="https://placeimg.com/192/192/people" />
            </dv-mask>
          </div>
        ))}
      </div>
    );
  },
};
```

## Mask

### Attributes

| name | description               | type                                                                                                                                                                                                          | default  |
| ---- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| type | the shape type of content | squircle, heart, hexagon, hexagon-2, decagon, pentagon, diamond, square, circle, parallelogram, parallelogram-2, parallelogram-3, parallelogram-4, star, star-2, triangle, triangle-2, triangle-3, triangle-4 | squircle |
