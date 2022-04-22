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
