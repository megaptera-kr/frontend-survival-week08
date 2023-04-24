import { useState } from 'react';

const useForceUpdate = () => {
  const [_, setState] = useState({});
  const forceUpdate = () => {
    setState({});
  };
  return forceUpdate;
};

export default useForceUpdate;
