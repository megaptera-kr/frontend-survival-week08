import FilterableRestaurantTable from '../../components/restaurants/FilterableRestaurantTable';

import renderWithProviders from '../../testHelper';

describe('<FilterableRestaurantTable />', () => {
  it('renders without crash', () => {
    renderWithProviders(<FilterableRestaurantTable />);
  });
});
