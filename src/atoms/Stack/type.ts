interface StackProps extends React.ComponentPropsWithoutRef<'div'> {
  $direction?: 'row' | 'column' | 'center';
  $alignItems?: React.CSSProperties['alignItems'];
  $justifyContent?: React.CSSProperties['justifyContent'];
}

export default StackProps;
