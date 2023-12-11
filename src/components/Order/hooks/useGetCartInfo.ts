import { useMemo } from 'react';

import useAppSelector from '../../../hooks/useAppSeletor';

import calculateTotalPrice from '../../../utils/calculateTotalPrice';

export default function useGetCartInfo() {
  const { addedFoods } = useAppSelector((state) => state.cart);

  const info = useMemo(() => {
    const count = addedFoods ? addedFoods.length : 0;
    const price = addedFoods ? calculateTotalPrice(addedFoods) : 0;

    return { count, price: price.toLocaleString() };
  }, [addedFoods]);

  return {
    info,
  };
}
