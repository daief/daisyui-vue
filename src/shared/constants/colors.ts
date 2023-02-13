export const COLORS = {
  primary: 'hsl(var(--p))',
  'primary-focus': 'hsl(var(--pf))',
  'primary-content': 'hsl(var(--pc))',
  secondary: 'hsl(var(--s))',
  'secondary-focus': 'hsl(var(--sf))',
  'secondary-content': 'hsl(var(--sc))',
  accent: 'hsl(var(--a))',
  'accent-focus': 'hsl(var(--af))',
  'accent-content': 'hsl(var(--ac))',
  neutral: 'hsl(var(--n))',
  'neutral-focus': 'hsl(var(--nf))',
  'neutral-content': 'hsl(var(--nc))',
  'base-100': 'hsl(var(--b1))',
  'base-200': 'hsl(var(--b2))',
  'base-300': 'hsl(var(--b3))',
  'base-content': 'hsl(var(--bc))',
  info: 'hsl(var(--in))',
  'info-content': 'hsl(var(--inc))',
  success: 'hsl(var(--su))',
  'success-content': 'hsl(var(--suc))',
  warning: 'hsl(var(--in))',
  'warning-content': 'hsl(var(--inc))',
  error: 'hsl(var(--er))',
  'error-content': 'hsl(var(--erc))',
} as const;

export type IColor = keyof typeof COLORS;