import { createContext, useMemo } from 'react';

import { SwitchContextProps, SwitchProps } from './types';

import SwitchContainer from './SwitchContainer';

import Slider from './Slider';

export const SwitchContext = createContext<SwitchContextProps | null>(null);

export function Switch({ $active, children, onClick }: SwitchProps) {
  const value = useMemo(
    () => ({ isOn: $active, toggle: onClick }),
    [$active, onClick],
  );

  return (
    <SwitchContainer onClick={onClick}>
      <SwitchContext.Provider value={value}>
        <Slider />
        {children}
      </SwitchContext.Provider>
    </SwitchContainer>
  );
}

export default Switch;
