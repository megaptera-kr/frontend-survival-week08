import React, { Dispatch, SetStateAction } from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

export default function FilterSection({
  categories,
  setSelectedCategory,
}: {
  categories: string[];
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="filter-restaurants">
      <h2>식당 필터</h2>
      <SearchBar />
      <FilterBar
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}
