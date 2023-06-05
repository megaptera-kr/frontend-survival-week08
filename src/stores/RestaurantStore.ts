import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { Restaurant, RestaurantData, Category } from '../types/restaurant';

@singleton()
@Store()
export default class RestaurantStore {
  restaurants: Restaurant[] = [];

  categories:Category[] = ['전체'];

  selectedCategory: Category = '전체';

  filteredText = '';

  async fetchRestaurants() {
    this.startLoading();

    const url = 'http://localhost:3000/restaurants';
    const response = await fetch(url);
    const data:RestaurantData = await response.json();

    this.completeLoading(data.restaurants);
  }

  @Action()
  filterRestaurants(restaurants: Restaurant[]) {
    const filteredRestaurants = this.selectedCategory === '전체'
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === this.selectedCategory);

    const query = this.filteredText.trim();

    return filteredRestaurants.filter((restaurant) => restaurant.name.includes(query));
  }

  @Action()
  private setCategories() {
    this.categories = this.restaurants.reduce((acc:Category[], cur) => (
      acc.includes(cur.category) ? acc : [...acc, cur.category]
    ), ['전체']);
  }

  @Action()
  search(text: string) {
    this.filteredText = text;
  }

  @Action()
  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  @Action()
  private startLoading() {
    this.restaurants = [];
  }

  @Action()
  private completeLoading(restaurants:Restaurant[]) {
    this.restaurants = restaurants;
    this.setCategories();
  }
}
