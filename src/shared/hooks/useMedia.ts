import { computed, ComputedRef, ref, unref, watch } from 'vue';
import { useTheme } from '../ctx';
import { IMaybeRef } from '../types/common';
import { IBreakPoint, defaultBreakPoints, IBreakPoints } from '../types/theme';
import { isBrowser } from '../utils';

function getQueryString(brkRule: IBreakPoints, brks: IBreakPoint[]) {
  return brks.map((brk) => {
    const idx = defaultBreakPoints.indexOf(brk);

    if (idx === -1) return '';

    const { rule } = brkRule;
    const min = rule[defaultBreakPoints[idx]];
    const max = rule[defaultBreakPoints[idx + 1]] - 5 / 100;

    if (idx === 0) return `(max-width: ${max}px)`;
    if (idx === defaultBreakPoints.length - 1) return `(min-width: ${min}px)`;

    return `(min-width: ${min}px) and (max-width: ${max}px)`;
  });
}

export function useMedias(
  brks: IMaybeRef<IBreakPoint[]>,
  defaultMatched?: IBreakPoint,
): ComputedRef<IBreakPoint | null> {
  const theme = useTheme();

  const querys = computed(() => getQueryString(theme.breakpoints, unref(brks)));

  const matchedIdx = ref(-1);

  watch(
    querys,
    (_, _2, onInvalidate) => {
      if (!isBrowser) return;

      const uns: VoidFunction[] = [];
      const mqlList = querys.value.map((query) =>
        query ? window.matchMedia(query) : null,
      );

      mqlList.forEach((mql, i) => {
        if (!mql) return;

        const update = () => {
          matchedIdx.value = mqlList.findIndex((it) => it?.matches);
        };

        update();

        mql.addEventListener('change', update);
        uns.push(() => {
          mql.removeEventListener('change', update);
        });

        onInvalidate(() => {
          uns.forEach((_) => _());
        });
      });
    },
    {
      immediate: true,
      flush: 'post',
    },
  );

  return computed(() => {
    const v = unref(brks);
    if (!isBrowser) return defaultMatched ?? (v[0] || null);
    return v[matchedIdx.value] || null;
  });
}

export function useMedia(brk: IMaybeRef<IBreakPoint>) {
  const result = useMedias(computed(() => [unref(brk)]));
  return computed(() => !!result.value);
}

export function useMediaParse<
  T extends IMaybeRef<Partial<Record<IBreakPoint | 'default', any>>>,
>(map: T) {
  type V = T extends IMaybeRef<
    Partial<Record<IBreakPoint | 'default', infer val>>
  >
    ? val
    : any;

  const brks = computed(() => {
    const { default: _, ...rest } = unref(map);
    const ks = Object.keys(rest);
    // sort by default list
    return defaultBreakPoints
      .map((it, index) => ({
        break: it,
        index,
      }))
      .filter((it) => ks.includes(it.break));
  });

  const reversedBrks = computed(() => [...brks.value].reverse());

  const res = useMedias(defaultBreakPoints);

  return computed<V>(() => {
    const input = unref(map);

    if (!res.value) return input.default;

    const exactRes = input[res.value];

    if (res.value in input) return exactRes;

    const idx = defaultBreakPoints.indexOf(res.value);

    const pre = reversedBrks.value.find((it) => it.index < idx);

    if (pre) return input[pre.break];

    return input.default;
  });
}
