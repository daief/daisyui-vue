import { computed, defineComponent, PropType } from 'vue';
import tw, { css } from 'twin.macro';
import { styled } from '../../shared/styled';

export const _table = 'table table-zebra table-compact active hover';

const StyledTable = styled('table', css``);

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
      'table w-full',
      {
        'table-zebra': props.zebra,
        'table-compact': props.compact,
      },
    ]);

    const head = computed(() =>
      props.columns.map((col, i) => (
        <th
          class={
            col.fixed
              ? {
                  sticky: true,
                  [col.fixed === 'left' ? 'left' : 'right']: 0,
                }
              : 'relative:important'
          }
          key={col.dataIndex || col.key || i}
        >
          {col.title}
        </th>
      )),
    );

    return () => {
      return (
        <StyledTable class={cls.value}>
          <thead>
            <tr>{head.value}</tr>
          </thead>
          <tbody>
            {props.dataSource.map((record, i) => (
              <tr key={i}>
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
        </StyledTable>
      );
    };
  },
});
