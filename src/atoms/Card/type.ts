import React from 'react';

interface CardProps extends React.ComponentPropsWithRef<'div'> {
  $borderRadius?: React.CSSProperties['borderRadius'];
  $gap?: React.CSSProperties['gap'];
}

export default CardProps;
