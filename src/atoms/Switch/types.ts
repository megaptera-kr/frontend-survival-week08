export type SwitchContainerProps = React.ComponentPropsWithRef<'button'>;

export interface SwitchContextProps {
  isOn: boolean;
  toggle: () => void;
}

export interface SwitchProps {
  onClick: () => void;
  $active: boolean;
  children: React.ReactNode;
}

export interface SliderProps {
  $active?: boolean;
  children?: React.ReactNode;
}
