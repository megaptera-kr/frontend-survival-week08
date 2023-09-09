import Category from './Category';

type CategoriesProps = {
  categories: Array<string>;
  setCurrentCategory: (text: string) => void;
}

export default function Categories({ categories, setCurrentCategory }: CategoriesProps) {
  return (
    <ul>
      {['전체', ...categories].map((category) => (
        <Category
          key={category}
          category={category}
          setCurrentCategory={setCurrentCategory}
        />
      ))}
    </ul>
  );
}
