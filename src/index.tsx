export * from './components';
export * from './components/icon';

export * from './shared/ctx';

export { install as default, installTheme } from './install';

export const version = VERSION;

import { useMedia, useMediaParse, useMedias } from './shared/hooks/useMedia';

/**
 * @private
 */
export const _ = {
  useMedia,
  useMedias,
  useMediaParse,
};
