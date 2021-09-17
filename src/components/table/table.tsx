import { computed, defineComponent, PropType } from 'vue';

export interface ITableColumn<T = unknown> {
  title?: string;
  dataIndex?: string;
  key?: string;
  fixed?: 'left' | 'right';
  render?: (text: string, record: T, index: number) => any;
}

export const tableProps = {
  zebra: Boolean,
  compact: Boolean,
  columns: { type: Array as PropType<ITableColumn<any>[]>, default: () => [] },
  dataSource: { type: Array, default: () => [] },
};

export type ITableProps = typeof tableProps;

export const Table = defineComponent({
  name: 'Table',
  props: tableProps,
  setup: (props) => {
    const cls = computed(() => [
      'dv-table table',
      {
        'table-zebra': props.zebra,
        'table-compact': props.compact,
      },
    ]);

    const cols = computed(() =>
      props.columns.map((col, i) => ({
        ...col,
        key: col.key || col.dataIndex || i,
      })),
    );

    const head = computed(() =>
      cols.value.map((col, i) => (
        <th
          style={
            col.fixed
              ? {
                  position: 'sticky',
                  [col.fixed === 'left' ? 'left' : 'right']: 0,
                }
              : {
                  position: 'relative',
                }
          }
          key={col.key}
        >
          {col.title}
        </th>
      )),
    );

    return () => {
      return (
        <div class="dv-table-wrap">
          <table class={cls.value}>
            <colgroup>
              {cols.value.map((col) => (
                <col key={col.key} />
              ))}
            </colgroup>
            <thead>
              <tr>{head.value}</tr>
            </thead>
            <tbody>
              {props.dataSource.map((record, i) => (
                <tr key={i} class="hover">
                  {props.columns.map((col) => (
                    <td
                      key={col.dataIndex || col.key}
                      class={
                        col.fixed
                          ? {
                              sticky: true,
                              [col.fixed === 'left' ? 'left' : 'right']: 0,
                            }
                          : 'relative'
                      }
                    >
                      {typeof col.render === 'function'
                        ? col.render(record[col.dataIndex], record, i)
                        : record[col.dataIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
  },
});
