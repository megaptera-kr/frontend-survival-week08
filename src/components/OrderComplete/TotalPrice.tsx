import { TotalPriceTypo } from './ui';

import useGetOrderInfo from './hooks/useGetOrderInfo';

function TotalPrice() {
  const { order } = useGetOrderInfo();

  const totalPrice = order?.totalPrice;

  if (!totalPrice) return null;

  return (
    <TotalPriceTypo $as='p' $variant='subHead_04'>
      <span>총 가격</span>
      {' '}
      {totalPrice.toLocaleString()}
      원
    </TotalPriceTypo>
  );
}

export default TotalPrice;
