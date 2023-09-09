import Categories from './Categories';
import FilterTextField from './FilterTextField';

type SearchBarProps = {
  categories: Array<string>;
  filterText: string;
  setFilterText: (text: string) => void;
  setCurrentCategory: (text: string) => void;
}

export default function SearchBar({
  categories, filterText, setFilterText, setCurrentCategory,
}: SearchBarProps) {
  return (
    <div>
      <FilterTextField text={filterText} setText={setFilterText} />
      <Categories categories={categories} setCurrentCategory={setCurrentCategory} />
    </div>
  );
}
