import { CancelButton, OrderButton } from './ui';

import { Stack } from '../../atoms';

import useAppSelector from '../../hooks/useAppSeletor';

import useCartHandler from './hooks/useCartHandler';

export default function CartButtons() {
  const { addedFoods } = useAppSelector((state) => state.cart);

  const { handleClickReset, handleClickOrder, disabledOrderButton } = useCartHandler();

  return (
    <Stack $direction='row' $gap='1rem'>
      <CancelButton
        $variant='ctaSecondary'
        $borderRadius='5rem'
        $height='10rem'
        onClick={handleClickReset}
      >
        취소
      </CancelButton>
      <OrderButton
        $variant='ctaPrimary'
        $borderRadius='5rem'
        $height='10rem'
        onClick={() => handleClickOrder(addedFoods)}
        disabled={disabledOrderButton}
      >
        주문하기
      </OrderButton>
    </Stack>
  );
}
