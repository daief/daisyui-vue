import { IThemeVariable } from '../theme/define';

export type IBreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const defaultBreakPoints: IBreakPoint[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
];

export interface IBreakPoints {
  rule: Record<IBreakPoint, number>;
}

export interface IThemeVariableScheme {
  scheme: 'light' | 'dark';
  rule: Record<IThemeVariable, string>;
}

export interface ITheme {
  breakpoints: IBreakPoints;
  variables: IThemeVariableScheme & {
    css: Record<IThemeVariable, string>;
  };
  name: string;
}

export interface IThemeContext extends ITheme {
  className: string;
}
