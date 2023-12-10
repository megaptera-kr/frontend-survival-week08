import { MenuInterface } from '../Restaurants/Restaurants.interface';
import useCartStore from '../../hooks/useCartStore';
import * as Styles from './styles';

interface MenuProps {
  menues : MenuInterface[]
}

function Menu({ menues } : MenuProps) {
  const [{ cart }, store] = useCartStore();
  const handleAddCart = (menu : MenuInterface) => {
    store.addCart(menu);
  };
  return (
    <Styles.Menues>
      {menues.map((menu) => (
        <Styles.Menu key={menu.id}>
          <Styles.MenuButton type="button" data-testid={`${menu.name}`} onClick={() => { handleAddCart(menu); }}>
            <Styles.MenuImage src={menu.image} />
            <Styles.MenuInfo>
              <Styles.MenuText>{menu.name}</Styles.MenuText>
              <Styles.MenuText>
                {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                {' '}
                원
              </Styles.MenuText>
            </Styles.MenuInfo>
          </Styles.MenuButton>
        </Styles.Menu>
      ))}
    </Styles.Menues>
  );
}

export default Menu;
