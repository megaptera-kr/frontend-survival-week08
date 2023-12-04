import Theme from '../../../styles/Theme';

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  $variant?: keyof Theme['typography'];
  $color?: keyof Theme['colors'];
  children: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  'as' | 'childern' | '$color' | '$size'
>;

export default TypographyProps;
