import fixtures from '../../../fixtures';

import { Menu } from '../../types/restaurants';

const { foods } = fixtures;

const state: { menu: Menu[] } = {
  menu: foods,
};

const useCartStore = jest.fn(() => [{ ...state }]);

export default useCartStore;
