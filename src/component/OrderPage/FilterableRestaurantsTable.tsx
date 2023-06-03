import styled from 'styled-components';
import filteredRestaurants from '../../utils/filteredRestaurants';
import FilteredRestaurantsTable from './FilteredRestaurantsTable';

const Table = styled.table`
  background-color: ${((props) => (props.theme.colors.buttonBackground))};
  color : #222;
  width : 100%;
`;

export default function FilterableRestaurantsTable() {
  const restaurants = filteredRestaurants();
  return (
    <Table>
      <tbody>
        {
          restaurants.map((restaurant) => (
            <FilteredRestaurantsTable key={restaurant.id} restaurant={restaurant} />
          ))
        }
      </tbody>
    </Table>
  );
}
