interface StackProps extends React.ComponentPropsWithRef<'div'> {
  $direction?: 'row' | 'column' | 'center';
  $alignItems?: React.CSSProperties['alignItems'];
  $justifyContent?: React.CSSProperties['justifyContent'];
  $gap?: React.CSSProperties['gap'];
}

export default StackProps;
