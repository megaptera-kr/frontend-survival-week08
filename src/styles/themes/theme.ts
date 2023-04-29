import a11y from './a11y';
import breakPoint from './breakPoint';
import colors from './colors';
import typo from './typography';
import size from './size';
import radius from './radius';
import shadow from './shadow';
import zindex from './zindex';

export const lightTheme = {
  type: 'light',
  a11y,
  breakPoint,
  colors: colors.light,
  typo,
  size,
  radius,
  shadow,
  zindex,
};

export const darkTheme = {
  ...lightTheme,
  type: 'dark',
  colors: colors.dark,
};

export type CustomTheme = typeof lightTheme;
