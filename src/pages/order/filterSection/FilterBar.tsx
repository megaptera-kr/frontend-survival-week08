import React from 'react';

export default function FilterBar() {
  return (
    <div className="filter-bar">
      <button type="button">전체</button>
      <button type="button">중식</button>
      <button type="button">한식</button>
      <button type="button">일식</button>
    </div>
  );
}
