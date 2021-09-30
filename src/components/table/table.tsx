import { component } from '@/shared/styled';
import { cssUnit } from '@/shared/utils';
import { computed, HTMLAttributes, PropType } from 'vue';
import style from './style';

export interface ITableColumn<T = unknown> {
  title?: string | (() => any);
  dataIndex?: string;
  key?: string;
  fixed?: 'left' | 'right';
  width?: string | number;
  render?: (text: string, record: T, rowIndex: number) => any;
}

const tableProps = {
  zebra: Boolean,
  compact: Boolean,
  columns: { type: Array as PropType<ITableColumn<any>[]>, default: () => [] },
  dataSource: { type: Array, default: () => [] },
};

export interface ITableProps<T = any> {
  zebra?: boolean;
  compact?: boolean;
  columns?: ITableColumn[];
  dataSource?: T[];
}

export const Table = component<HTMLAttributes, ITableProps>(
  {
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
            {typeof col.title === 'function' ? col.title() : col.title}
          </th>
        )),
      );

      return () => {
        return (
          <div class="dv-table-wrap">
            <table class={cls.value}>
              <colgroup>
                {cols.value.map((col) => (
                  <col
                    key={col.key}
                    style={{
                      width: cssUnit(col.width),
                    }}
                  />
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
  },
  style,
);
