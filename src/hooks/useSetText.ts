import { useState } from 'react';

type useSearchTextReturn = [string, (v: string) => void];

function useSetText(initialValie = ''): useSearchTextReturn {
  const [text, setText] = useState<string>(initialValie);

  const handleSetText = (v: string) => {
    setText(v);
  };

  return [text, handleSetText];
}

export default useSetText;
