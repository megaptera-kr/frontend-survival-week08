interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  $variant?: 'ctaSecondary' | 'ctaPrimary';
  $width?: React.CSSProperties['width'];
  $height?: React.CSSProperties['height'];
  $borderRadius?: React.CSSProperties['borderRadius'];
}

export default ButtonProps;
