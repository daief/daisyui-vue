import { ITheme, IThemeVariableScheme } from '../types/theme';
import { themeVariable } from './define';

export function createThemeByVariables(
  name: string,
  variables: IThemeVariableScheme,
): ITheme {
  return {
    name,
    breakpoints: {
      rule: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
      },
    },
    variables: {
      ...variables,
      css: Object.fromEntries(
        Object.keys(variables.rule).map((key) => [key, themeVariable[key][1]]),
      ) as any,
    },
  };
}
