import Category from '../../../types/category';
import CategoryFilter from '../CategoryFilter';
import TextField from '../TextField';

type SearchBarProps = {
  categories:Category[]
}

function SearchBar({ categories }:SearchBarProps) {
  return (
    <div>
      <TextField label="search" placeholder="식당이름을 입력해주세요" />
      <CategoryFilter categories={categories} />
    </div>
  );
}

export default SearchBar;
