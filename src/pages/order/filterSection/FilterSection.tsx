import React from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

export default function FilterSection() {
  return (
    <div className="filter-restaurants">
      <h2>식당 필터</h2>
      <SearchBar />
      <FilterBar />
    </div>
  );
}
