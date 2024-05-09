import { render, screen } from '@testing-library/react';
import FilterableRestaurantsTable from '.';
import fixtures from '../../../../fixtures';
import getUniqueCategory from '../../../utils/getUniqueCategory';

const { restaurants } = fixtures;
const categories = getUniqueCategory(restaurants);

function renderFilterableRestaurantsTable() {
  render(<FilterableRestaurantsTable />);
}

describe('FilterableRestaurantsTable', () => {
  beforeEach(() => {
    renderFilterableRestaurantsTable();
  });

  it('renders SearchBar', () => {
    const labelText = screen.getByLabelText(/검색/);
    const placeholderText = screen.getByPlaceholderText(/식당이름을 입력해주세요/);

    expect(labelText).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();

    const btns = screen.getAllByRole('button');
    btns.forEach((btn, index) => {
      expect(btn).toHaveTextContent(categories[index]);
    });
  });

  it('renders RestaurantsTable', async () => {
    const restaurantRows = await screen.findAllByRole('row');
    expect(restaurantRows).toHaveLength(restaurants.length);

    const menuItem = await screen.findByText(/짜장면/);
    expect(menuItem).toBeInTheDocument();
  });
});
