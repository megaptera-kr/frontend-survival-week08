import { useEffect } from 'react';

import useGetOrderInfo from './useGetOrderInfo';

import useHandleNavigate from '../../../hooks/useHandleNavigate';

function useAccessible() {
  const { order, isLoading } = useGetOrderInfo();

  const { handleNavigate } = useHandleNavigate();

  useEffect(() => {
    if (!order && !isLoading) {
      handleNavigate('Home', null, true);
    }
  }, [order, isLoading]);

  return null;
}

export default useAccessible;
