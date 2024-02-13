import { RestaurantData } from '../../../../hooks/useFetchData';
import MenuRow from './MenuRow';

export default function MenuInRestaurants({ restaurantData }: {
  restaurantData: RestaurantData | undefined;
}) {
  return (
    <div className="menu-table">
      <h2>식당별 메뉴</h2>
      <table>
        <thead>
          <th>식당 이름</th>
          <th>메뉴</th>
        </thead>
        <tbody>
          {restaurantData
            ?.menu.map((menu, i) => (
              <MenuRow
                key={menu.id}
                isHead={i === 0}
                data={menu}
                category={restaurantData?.name}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
