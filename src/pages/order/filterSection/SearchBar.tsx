import React from 'react';

export default function SearchBar() {
  return (
    <div className="search-bar">
      <label htmlFor="search-input">검색</label>
      <input
        id="search-input"
        type="text"
        className="search-input"
        placeholder="식당 이름을 입력해주세요"
      />
    </div>
  );
}
