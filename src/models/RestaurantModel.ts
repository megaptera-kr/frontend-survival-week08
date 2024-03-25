import MenuItemType from '../types/MenuItemType';
import RestaurantType from '../types/RestaurantType';

import MenuItemModel from './MenuItemModel';

class RestaurantModel {
  readonly id: number;

  readonly name: string;

  readonly category: string;

  readonly menu: MenuItemModel[];

  constructor({ id, name, category, menu }: RestaurantType) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.menu = menu.map(
      (menuItem: MenuItemType) => new MenuItemModel({ ...menuItem }),
    );
  }
}

export default RestaurantModel;
