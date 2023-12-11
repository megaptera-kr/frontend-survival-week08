import { CartWrraper } from './ui';

import CartHeader from './CartHeader';

import CartBody from './CartBody';

import CartButtons from './CartButtons';

export default function Cart() {
  return (
    <CartWrraper $direction='column'>
      <CartHeader />
      <CartBody />
      <CartButtons />
    </CartWrraper>
  );
}
