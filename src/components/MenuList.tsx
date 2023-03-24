import { Menu } from '../types/restaurants';

export default function MenuList({ menus, addCart }:{
    menus: Menu[]
    addCart:(item: Menu) => void
}) {
  return (
    <>
      {menus.map((menu) => {
        const { id, name } = menu;
        return (
          <button key={id} type="button" onClick={() => addCart(menu)}>{name}</button>
        );
      })}
    </>
  );
}
