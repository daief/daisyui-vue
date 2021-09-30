# Table

## Examples

table

```tsx :::run
export default {
  setup: () => {
    const columns = [
      {
        title: '',
        dataIndex: 'num',
        fixed: 'left',
        width: 20,
      },
      {
        title: 'name',
        dataIndex: 'name',
      },
      {
        title: 'job',
        dataIndex: 'job',
      },
      {
        title: 'favorite color',
        dataIndex: 'favoriteColor',
      },
    ];

    const dataSource = [
      {
        num: 1,
        name: 'Cy Ganderton',
        job: 'Quality Control Specialist',
        favoriteColor: 'Blue',
      },
      {
        num: 2,
        name: 'Hart Hagerty',
        job: 'Desktop Support Technician',
        favoriteColor: 'Purple',
      },
      {
        num: 3,
        name: 'Brice Swyre',
        job: 'Tax Accountant',
        favoriteColor: 'Red',
      },
      {
        num: 4,
        name: 'Marjy Ferencz',
        job: 'Office Assistant I',
        favoriteColor: 'Crimson',
      },
    ];
    return () => <dv-table columns={columns} dataSource={dataSource} />;
  },
};
```

table-zebra & table-compact

```html :::run
<template>
  <dv-table :columns="columns" :dataSource="dataSource" zebra compact />
</template>

<script lang="tsx">
  export default {
    setup: () => {
      const columns = [
        {
          title: '',
          dataIndex: 'num',
          fixed: 'left',
          width: 20,
        },
        {
          title: 'name',
          dataIndex: 'name',
        },
        {
          title: 'job',
          dataIndex: 'job',
        },
        {
          title: 'favorite color',
          dataIndex: 'favoriteColor',
        },
      ];

      const dataSource = [
        {
          num: 1,
          name: 'Cy Ganderton',
          job: 'Quality Control Specialist',
          favoriteColor: 'Blue',
        },
        {
          num: 2,
          name: 'Hart Hagerty',
          job: 'Desktop Support Technician',
          favoriteColor: 'Purple',
        },
        {
          num: 3,
          name: 'Brice Swyre',
          job: 'Tax Accountant',
          favoriteColor: 'Red',
        },
        {
          num: 4,
          name: 'Marjy Ferencz',
          job: 'Office Assistant I',
          favoriteColor: 'Crimson',
        },
      ];
      return {
        columns,
        dataSource,
      };
    },
  };
</script>
```

table-jsx

```tsx :::run
export default {
  setup: () => {
    const columns = [
      {
        title: '',
        dataIndex: 'num',
        fixed: 'left',
        width: 20,
        render: (num) => <strong>{num}</strong>,
      },
      {
        title: 'name',
        dataIndex: 'name',
      },
      {
        title: 'job',
        dataIndex: 'job',
      },
      {
        title: () => (
          <>
            <dv-icon-color size="1.5em" style="margin-right: 6px" />
            favorite color
          </>
        ),
        dataIndex: 'favoriteColor',
        render: (color) => <span style={{ color }}>{color}</span>,
      },
    ];

    const dataSource = [
      {
        num: 1,
        name: 'Cy Ganderton',
        job: 'Quality Control Specialist',
        favoriteColor: 'Blue',
      },
      {
        num: 2,
        name: 'Hart Hagerty',
        job: 'Desktop Support Technician',
        favoriteColor: 'Purple',
      },
      {
        num: 3,
        name: 'Brice Swyre',
        job: 'Tax Accountant',
        favoriteColor: 'Red',
      },
      {
        num: 4,
        name: 'Marjy Ferencz',
        job: 'Office Assistant I',
        favoriteColor: 'Crimson',
      },
    ];
    return () => <dv-table columns={columns} dataSource={dataSource} />;
  },
};
```

## Table

### Attributes

| name       | description              | type           | default |
| ---------- | ------------------------ | -------------- | ------- |
| columns    | table columns config     | ITableColumn[] | -       |
| dataSource | table data source        | array          | -       |
| compact    | makes table more compact | boolean        | -       |
| zebra      | makes table rows zebra   | boolean        | -       |

### ITableColumn

```ts
interface ITableColumn<T = unknown> {
  title?: string | (() => any);
  dataIndex?: string;
  key?: string;
  fixed?: 'left' | 'right';
  render?: (text: string, record: T, index: number) => any;
}
```
