/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import styled from 'styled-components';

import React from 'react';
import TypographyProps from './type';

function Typo<C extends React.ElementType>(props: TypographyProps<C>) {
  const {
    $as, $variant, $color, children, ...rest
  } = props;

  const Component = $as || 'span';

  return (
    <Component $varinat={$variant} $color={$color} {...rest}>
      {children}
    </Component>
  );
}

const Typography = styled(Typo)(({ theme, $variant, $color }) => ({
  ...($variant ? theme.typography[$variant] : theme.typography.body_01),
  ...($color
    ? { color: theme.colors[$color] }
    : { color: theme.colors.defaultText }),
}));

export default Typography;
