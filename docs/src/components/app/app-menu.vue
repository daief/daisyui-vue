<script lang="tsx">
import { Menu, MenuItem } from 'daisyui-vue';
import { Fragment, defineComponent } from 'vue';
import { RouteRecordRaw, RouterLink } from 'vue-router';
import routes from '~pages';

/**
 * route meta:
 *
 * - name: final name
 * - sort: number, default 5
 * - menuHidden: not show in menu
 */

export default defineComponent({
  name: 'AppMenu',
  setup: () => {
    const { rest, ...groups } = routes
      .filter((it) => !it.meta?.menuHidden)
      .sort((a, b) => {
        const arr = [a, b];
        const [sortA, sortB] = arr.map((it) => {
          const num = Number(it.meta?.sort);
          return Number.isFinite(num) ? num : 5;
        });
        const [nameA, nameB] = arr.map((it) => (it.name || '') as string);

        if (sortA !== sortB) {
          return sortA - sortB;
        }

        return nameA.localeCompare(nameB);
      })
      .reduce<{
        rest: RouteRecordRaw[];
        [k: string]: RouteRecordRaw[];
      }>(
        (rs, r) => {
          if (/^\/components\//.test(r.path)) {
            const cat = r.meta?.category as string;
            if (cat) {
              rs[cat] ||= [];
              rs[cat].push(r);
            } else {
              rs.components.push(r);
            }
          } else {
            rs.rest.push(r);
          }
          return rs;
        },
        {
          rest: [],
          components: [],
        },
      );
    const groupsArr = Object.entries(groups);

    const renderItem = (route: RouteRecordRaw) => {
      const routeName =
        (route.meta?.name as string) ||
        (route.name as string)?.replace('components-', '') ||
        '';

      return (
        <MenuItem childWrapper={false} key={route.path} class="capitalize">
          <RouterLink to={route.path} activeClass="dv-active">
            {routeName}
          </RouterLink>
        </MenuItem>
      );
    };

    return () => (
      <Menu class="dv-roundedbox p-4" compact>
        {rest.map(renderItem)}
        {groupsArr.map(([catName, catRoutes]) => (
          <Fragment key={catName}>
            <MenuItem asTitle>
              <span class="capitalize">{catName}</span>
            </MenuItem>
            {catRoutes.map(renderItem)}
          </Fragment>
        ))}
      </Menu>
    );
  },
});
</script>

<style scoped lang="less"></style>
