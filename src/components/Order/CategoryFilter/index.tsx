import Category from '../../../types/category';

type CategoryFitlerProps = {
  categories:Category[]
}
function CategoryFilter({ categories = ['전체'] }:CategoryFitlerProps) {
  return (
    <div>
      {categories.map((category) => (
        <button
          type="button"
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
