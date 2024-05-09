import Category from '../../../types/category';

type CategoryFitlerProps = {
  categories:Category[]
  selectedCategory:Category
  setSelectedCategory:(category:Category) => void
}

function CategoryFilter({
  categories = ['전체'],
  selectedCategory,
  setSelectedCategory,
}:CategoryFitlerProps) {
  const handleClick = (category:Category) => () => {
    setSelectedCategory(category);
  };
  return (
    <div>
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          onClick={handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
