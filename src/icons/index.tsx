import { component } from '@/shared/styled';
import style from './style';

export const IconInfo = component(
  {
    name: 'IconInfo',
    setup: () => {
      return () => (
        <svg
          class="dv-icon"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="false"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      );
    },
  },
  style,
);
