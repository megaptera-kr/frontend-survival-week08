import Category from './category';
import Food from './food';

type Restaurant = {
  id:string;
  category:Category;
  name:string;
  menu:Food[]
}

export default Restaurant;
