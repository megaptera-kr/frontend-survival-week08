import MenuItemType from './MenuItemType';

type RestaurantType = {
  id: number;
  name: string;
  category: string;
  menu: MenuItemType[];
};

export default RestaurantType;
