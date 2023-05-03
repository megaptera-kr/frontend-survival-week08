import colors from './colors';

const shadow = {
  md: '0px 2px 10px rgba(0, 0, 0, 0.12)',
  sheet: '0px 0px 16px rgba(61, 72, 88, 0.2)',
  hover: `0 0 0 1px inset ${colors.dark.brand}`,
} as const;

export default shadow;
