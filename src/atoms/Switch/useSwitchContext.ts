import { useContext } from 'react';

import { SwitchContext } from '.';

const useSwitchContext = () => {
  const context = useContext(SwitchContext);

  if (!context) {
    throw new Error('This component must be used within a SwitchAtom');
  }

  return context;
};

export default useSwitchContext;
