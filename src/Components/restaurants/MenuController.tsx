import TextField from './TextField';
import Categories from './Categories';

type MenuControllerProps = {
  query: string;
  setQuery: (query: string) => void;
  categories: string[];
  selectedCategory: string;
  setCategory: (category: string) => void;
};
export default function MenuController({
  query,
  setQuery,
  categories,
  selectedCategory,
  setCategory,
}: MenuControllerProps) {
  return (
    <div>
      <TextField query={query} setQuery={setQuery} />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
      />
    </div>
  );
}
