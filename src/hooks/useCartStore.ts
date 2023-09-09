import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import CartStore from '../stores/cart.store';

export default function useCartStore() {
  const carStore = container.resolve(CartStore);

  return useStore(carStore);
}
