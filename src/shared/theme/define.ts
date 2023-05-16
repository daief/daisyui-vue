export const themeVariableColor = {
  primary: ['hsl(var(--p))', '--p'],
  'primary-focus': ['hsl(var(--pf))', '--pf'],
  'primary-content': ['hsl(var(--pc))', '--pc'],
  secondary: ['hsl(var(--s))', '--s'],
  'secondary-focus': ['hsl(var(--sf))', '--sf'],
  'secondary-content': ['hsl(var(--sc))', '--sc'],
  accent: ['hsl(var(--a))', '--a'],
  'accent-focus': ['hsl(var(--af))', '--af'],
  'accent-content': ['hsl(var(--ac))', '--ac'],
  neutral: ['hsl(var(--n))', '--n'],
  'neutral-focus': ['hsl(var(--nf))', '--nf'],
  'neutral-content': ['hsl(var(--nc))', '--nc'],
  'base-100': ['hsl(var(--b1))', '--b1'],
  'base-200': ['hsl(var(--b2))', '--b2'],
  'base-300': ['hsl(var(--b3))', '--b3'],
  'base-content': ['hsl(var(--bc))', '--bc'],
  info: ['hsl(var(--in))', '--in'],
  'info-content': ['hsl(var(--inc))', '--inc'],
  success: ['hsl(var(--su))', '--su'],
  'success-content': ['hsl(var(--suc))', '--suc'],
  warning: ['hsl(var(--wa))', '--wa'],
  'warning-content': ['hsl(var(--wac))', '--wac'],
  error: ['hsl(var(--er))', '--er'],
  'error-content': ['hsl(var(--erc))', '--erc'],
} as const;

export const themeVariable = {
  ...themeVariableColor,
  'rounded-box': ['var(--rounded-box)', '--rounded-box'],
  'rounded-btn': ['var(--rounded-btn)', '--rounded-btn'],
  'rounded-badge': ['var(--rounded-badge)', '--rounded-badge'],
  'animation-btn': ['var(--animation-btn)', '--animation-btn'],
  'animation-input': ['var(--animation-input)', '--animation-input'],
  'btn-text-case': ['var(--btn-text-case)', '--btn-text-case'],
  'btn-focus-scale': ['var(--btn-focus-scale)', '--btn-focus-scale'],
  'border-btn': ['var(--border-btn)', '--border-btn'],
  'tab-border': ['var(--tab-border)', '--tab-border'],
  'tab-radius': ['var(--tab-radius)', '--tab-radius'],
} as const;

export type IThemeVariableColor = keyof typeof themeVariableColor;
export type IThemeVariable = keyof typeof themeVariable;
