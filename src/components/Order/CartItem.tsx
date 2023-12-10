import { Food } from '../../types';

import {
  Menu,
  MenuTitleWrraper,
  MenuTitleTypo,
  DeleteButton,
  MenuPriceTypo,
} from './ui';

import useCartHandler from './hooks/useCartHandler';

import DeleteIcon from '../../../static/icons/x.svg';

type CartItemProps = { item: Food; index: number };

function CartItem({ item, index }: CartItemProps) {
  const { handleClickRemove } = useCartHandler();

  const { name, price } = item;

  const priceText = `${price.toLocaleString()}원`;

  return (
    <Menu key={Math.random()}>
      <MenuTitleWrraper $direction='row' $justifyContent='space-between'>
        <MenuTitleTypo $as='p' $variant='subHead_03'>
          {name}
        </MenuTitleTypo>
        <DeleteButton onClick={() => handleClickRemove(index)}>
          <DeleteIcon width='2.4rem' height='2.4rem' />
        </DeleteButton>
      </MenuTitleWrraper>
      <MenuPriceTypo $as='p' $variant='subHead_03'>
        {priceText}
      </MenuPriceTypo>
    </Menu>
  );
}

export default CartItem;
