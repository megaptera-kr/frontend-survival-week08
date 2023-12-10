import Menu from '../Menu/Menu';
import { RestaurantsInterface } from './Restaurants.interface';
import * as Styles from './styles';

interface RestaurantsProps {
  restaurants: RestaurantsInterface[];
}

function Restaurants({ restaurants } : RestaurantsProps) {
  return (
    <Styles.Restaurants>
      {restaurants.map((restaurant) => (
        <Styles.Restaurant key={`restaurant_${restaurant.id}`}>
          <Styles.StoreName>
            {restaurant.name}
          </Styles.StoreName>
          <Menu menues={restaurant.menu} />
        </Styles.Restaurant>
      ))}
    </Styles.Restaurants>
  );
}

export default Restaurants;
