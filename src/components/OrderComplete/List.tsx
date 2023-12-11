import { Typography } from '../../atoms';

import { OrderListWrraper, OrderListItem } from './ui';

import useGetOrderInfo from './hooks/useGetOrderInfo';

export default function List() {
  const { order } = useGetOrderInfo();

  const orderedList = order?.menu;

  return (
    <OrderListWrraper $direction='column' $gap='2.4rem'>
      {orderedList?.map(({ name, price }) => (
        <OrderListItem
          key={Math.random()}
          $direction='row'
          $justifyContent='space-between'
        >
          <Typography $variant='body_02'>{name}</Typography>
          <Typography $variant='body_02'>{`${price.toLocaleString()}원`}</Typography>
        </OrderListItem>
      ))}
    </OrderListWrraper>
  );
}
