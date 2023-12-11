import { Stack, Typography } from '../../atoms';

import useGetCartInfo from './hooks/useGetCartInfo';

import CartIcon from '../../../static/icons/cart.svg';

import { CartHeaderWrraper, CountChip, CountTypo } from './ui';

export default function CartHeader() {
  const { info } = useGetCartInfo();

  const { count, price } = info;

  const countText = `${count}개`;

  return (
    <CartHeaderWrraper $direction='row' $alignItems='center'>
      <Stack $direction='row' $alignItems='center' $gap='1rem'>
        <CartIcon width='4rem' />
        <Typography $variant='subHead_01'>주문내역</Typography>
        <CountChip>
          <Typography $variant='subHead_02'>{countText}</Typography>
        </CountChip>
      </Stack>
      <CountTypo $variant='subHead_01'>
        총 결제 예상금액
        {' '}
        <span>{price}</span>
        원
      </CountTypo>
    </CartHeaderWrraper>
  );
}
