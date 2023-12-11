import { MenuCard, MenuInfoWrraper, MenuTypo } from './ui';

import useCartHandler from './hooks/useCartHandler';

import { Food } from '../../types';

type MenuItemProps = { menu: Food };

export default function MenuItem({ menu }: MenuItemProps) {
  const { handleClickAdd } = useCartHandler();

  return (
    <MenuCard
      key={`${menu.id}-${menu.name}`}
      onClick={() => handleClickAdd(menu)}
    >
      <img src={menu.image} alt={menu.name} />
      <MenuInfoWrraper $direction='column' $gap='1rem'>
        <MenuTypo $as='p' $variant='subHead_01'>
          {menu.name}
        </MenuTypo>
        <MenuTypo $as='p' $variant='subHead_01'>
          {`${menu.price.toLocaleString()}원`}
        </MenuTypo>
      </MenuInfoWrraper>
    </MenuCard>
  );
}
