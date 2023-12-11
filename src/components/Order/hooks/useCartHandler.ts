/* eslint-disable no-alert */
import { useCallback } from 'react';

import useAppSelector from '../../../hooks/useAppSeletor';

import useAppDispatch from '../../../hooks/useAppDispatch';

import { addFood, deleteFood, resetCart } from '../../../reducer/cart';

import { resetSearch } from '../../../reducer/search';

import { usePostOrderMutation } from '../../../services/hooks/usePostOrder';

import useHandleNavigate from '../../../hooks/useHandleNavigate';

import calculateTotalPrice from '../../../utils/calculateTotalPrice';

import Food from '../../../types/Food';

export default function useCartHandler() {
  const { handleNavigate } = useHandleNavigate();

  const { addedFoods } = useAppSelector((state) => state.cart);

  const [postOrder] = usePostOrderMutation();

  const disabledOrderButton = !addedFoods.length;

  const dispatch = useAppDispatch();

  const handleClickAdd = useCallback(
    (item: Food) => {
      dispatch(addFood(item));
    },
    [dispatch],
  );

  const handleClickRemove = useCallback(
    (index: number) => {
      dispatch(deleteFood(index));
    },
    [dispatch],
  );

  const handleClickReset = useCallback(() => {
    if (addedFoods.length > 0) {
      dispatch(resetCart([]));
      return;
    }

    dispatch(resetSearch());

    handleNavigate('Home');
  }, [dispatch, handleNavigate]);

  const handleClickOrder = useCallback(
    async (menu: Food[]) => {
      if (!menu.length) {
        return;
      }

      const totalPrice = calculateTotalPrice(menu);

      try {
        const result = await postOrder({ menu, totalPrice }).unwrap();

        const { id } = result;

        handleNavigate('OrderComplete', id);
      } catch (error) {
        alert('주문 생성 실패');
      } finally {
        dispatch(resetCart([]));
        dispatch(resetSearch());
      }
    },
    [postOrder, dispatch, handleNavigate],
  );

  return {
    disabledOrderButton,
    handleClickAdd,
    handleClickReset,
    handleClickRemove,
    handleClickOrder,
  };
}
