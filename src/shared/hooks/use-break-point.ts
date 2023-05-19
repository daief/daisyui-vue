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

export function useBreakPoint(
  defaultMatched?: IBreakPoint,
): ComputedRef<IBreakPoint[]> {
  const theme = useTheme();
  const querys = computed(() =>
    getQueryString(theme.breakpoints, defaultBreakPoints),
  );
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
    let finalIndex = matchedIdx.value;
    if (!isBrowser && defaultMatched) {
      finalIndex = defaultBreakPoints.indexOf(defaultMatched);
    }
    return defaultBreakPoints.slice(0, finalIndex + 1);
  });
}

/**
 * less then or equal to
 * @param targetBreakPoint
 * @param defaultResult
 * @example
 * ```tsx
 * // true when break point is xs or sm (less then or equal to sm)
 * const isMobile = useBreakPointLte('sm');
 * ```
 */
export function useBreakPointLte(
  targetBreakPoint: IMaybeRef<IBreakPoint>,
  defaultResult?: boolean,
): ComputedRef<boolean | undefined> {
  const brks = useBreakPoint();

  const getTargetIndex = () =>
    defaultBreakPoints.indexOf(unref(targetBreakPoint));

  return computed(() => {
    if (!isBrowser) return defaultResult;
    // xs, sm , md
    //     sm (index: 1)
    const idx = getTargetIndex();
    return idx === -1 ? defaultResult : brks.value.length - 1 <= idx;
  });
}
