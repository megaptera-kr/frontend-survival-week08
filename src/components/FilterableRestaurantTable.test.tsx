import FilterableRestaurantTable from './FilterableRestaurantTable';
import { renderWithProviders } from '../testHelper';

describe('FilterableRestaurantTable', () => {
  it('renders FilterableRestaurantTable', () => {
    renderWithProviders((
      <FilterableRestaurantTable />
    ));
  });
});
