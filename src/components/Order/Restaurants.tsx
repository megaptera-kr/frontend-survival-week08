import { Typography, Stack } from '../../atoms';

import { RestaurantWrraper } from './ui';

import { Restaurant } from '../../types';

import MenuItem from './MenuItem';

type ListItemProps = {
  item: Restaurant;
};

export default function Restaurants({ item }: ListItemProps) {
  return (
    <RestaurantWrraper $direction='column' $gap='2rem' key={item.name}>
      <Typography $variant='subHead_01'>{item.name}</Typography>

      <Stack $direction='row' $gap='2.4rem'>
        {item.menu.map((menu) => (
          <MenuItem key={`${menu.id}-${menu.name}`} menu={menu} />
        ))}
      </Stack>
    </RestaurantWrraper>
  );
}
