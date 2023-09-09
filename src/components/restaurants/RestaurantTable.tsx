import RestaurantRow from './RestaurantRow';

import { Restaurant } from '../../types/restaurants';

type RestaurantTableProps = {
  restaunrants: Restaurant[];
}

export default function RestaurantTable({ restaunrants }: RestaurantTableProps) {
  return (
    <table>
      <tbody>
        {restaunrants.map((restaunrant) => (
          <RestaurantRow
            key={restaunrant.id}
            restaunrant={restaunrant}
          />
        ))}
      </tbody>
    </table>
  );
}
