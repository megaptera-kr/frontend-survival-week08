import { Menu, Restaurnant } from '../types/restaurants';
import MenuList from './MenuList';

export default function ShopList({ filteredRestaurant, addCart }:{
  filteredRestaurant:Restaurnant[], addCart:(item: Menu) => void
}) {
  return (
    <>
      {filteredRestaurant.map((restaurant:Restaurnant) => {
        const { id, name, menu } = restaurant;
        return (
          <>
            <div key={id}>{name}</div>

            <MenuList menus={menu} addCart={addCart} />

          </>

        );
      })}
    </>
  );
}
