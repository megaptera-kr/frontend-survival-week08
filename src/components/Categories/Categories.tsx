import * as Styles from './styles';

interface CategoriesProps {
  categories: string[];
  currentCategory : string;
  handleSetCurrentCategory : (category : string) => void
}

function Categories({ categories, currentCategory, handleSetCurrentCategory } : CategoriesProps) {
  return (
    <Styles.Categories className="categories">
      {categories.map((category) => (
        <Styles.Category key={category}>
          <Styles.CategoryButton type="button" data-testid={category} className={category === currentCategory ? 'selected' : ''} onClick={() => { handleSetCurrentCategory(category); }}>{category}</Styles.CategoryButton>
        </Styles.Category>
      ))}
    </Styles.Categories>
  );
}

export default Categories;
