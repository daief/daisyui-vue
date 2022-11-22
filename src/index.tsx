export * from './components';

export * from './shared/ctx';

export { install as default, installTheme } from './install';

export const version = VERSION;

import { useMedia, useMediaParse, useMedias } from './shared/hooks/use-media';

/**
 * @private
 */
export const _ = {
  useMedia,
  useMedias,
  useMediaParse,
};
