import Menu from './Menu';

import { Restaurant } from '../../types/restaurants';

type RestaurantRowProps = {
  restaunrant: Restaurant;
}

export default function RestaurantRow({ restaunrant }: RestaurantRowProps) {
  return (
    <tr>
      <td>{restaunrant.name}</td>
      <td><Menu menu={restaunrant.menu} /></td>
    </tr>
  );
}
