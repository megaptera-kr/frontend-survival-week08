import { CartBodyWrraper } from './ui';

import useAppSelector from '../../hooks/useAppSeletor';

import CartItem from './CartItem';

export default function CartBody() {
  const { addedFoods } = useAppSelector((state) => state.cart);

  return (
    <CartBodyWrraper $direction='row' $gap='1rem'>
      {!!addedFoods.length
        && addedFoods.map((item, index) => (
          <CartItem item={item} index={index} key={Math.random()} />
        ))}
    </CartBodyWrraper>
  );
}
