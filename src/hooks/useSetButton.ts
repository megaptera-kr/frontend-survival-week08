import { useState } from 'react';

type useSetButtonReturn = [string, (v: string) => void];

function useSetButton(initialValie = ''): useSetButtonReturn {
  const [target, setTarget] = useState<string>(initialValie);

  const handleTarget = (v: string) => {
    setTarget(v);
  };

  return [target, handleTarget];
}

export default useSetButton;
