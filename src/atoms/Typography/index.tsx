/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import styled from 'styled-components';

import TypographyProps from './type';

function Text<C extends React.ElementType>({
  as,
  children,
  $variant,
  $color,
  ...rest
}: TypographyProps<C>) {
  const Component = as || 'span';

  return (
    <Component $variant={$variant} $color={$color} {...rest}>
      {children}
    </Component>
  );
}

const Typography = styled(Text)(({ theme, $variant, $color }) => ({
  ...($variant ? theme.typography[$variant] : theme.typography.body_01),
  ...($color ? { color: theme.colors[$color] } : {}),
}));

export default Typography;
