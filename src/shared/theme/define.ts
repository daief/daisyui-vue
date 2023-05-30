export const themeColorVariable = {
  primary: '--p',
  'primary-focus': '--pf',
  'primary-content': '--pc',
  secondary: '--s',
  'secondary-focus': '--sf',
  'secondary-content': '--sc',
  accent: '--a',
  'accent-focus': '--af',
  'accent-content': '--ac',
  neutral: '--n',
  'neutral-focus': '--nf',
  'neutral-content': '--nc',
  'base-100': '--b1',
  'base-200': '--b2',
  'base-300': '--b3',
  'base-content': '--bc',
  info: '--in',
  'info-content': '--inc',
  success: '--su',
  'success-content': '--suc',
  warning: '--wa',
  'warning-content': '--wac',
  error: '--er',
  'error-content': '--erc',
} as const;

export const themeVariable = {
  ...themeColorVariable,
  'rounded-box': '--rounded-box',
  'rounded-btn': '--rounded-btn',
  'rounded-badge': '--rounded-badge',
  'animation-btn': '--animation-btn',
  'animation-input': '--animation-input',
  'btn-text-case': '--btn-text-case',
  'btn-focus-scale': '--btn-focus-scale',
  'border-btn': '--border-btn',
  'tab-border': '--tab-border',
  'tab-radius': '--tab-radius',
} as const;

export type IThemeVariableColor = keyof typeof themeColorVariable;
export type IThemeVariable = keyof typeof themeVariable;
