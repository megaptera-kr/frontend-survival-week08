import { DefaultTheme } from 'styled-components';

type TypographyProps<T extends React.ElementType> = {
  $as?: T;
  $variant?: keyof DefaultTheme['typography'];
  $color?: keyof DefaultTheme['colors'];
  children: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  '$as' | 'children' | '$variant' | '$color'
>;

export default TypographyProps;
