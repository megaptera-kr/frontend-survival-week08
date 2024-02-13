import React, { Dispatch, SetStateAction, useCallback } from 'react';

type FilterButtonProps = {
  btnData: string
  handleClick: any,
}

function FilterButton({
  btnData,
  handleClick,
}: FilterButtonProps) {
  return (
    <button type="button" onClick={handleClick}>{btnData}</button>
  );
}

type FilterBarProps = {
  categories: string[];
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export default function FilterBar({
  categories,
  setSelectedCategory,
}: FilterBarProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setSelectedCategory(
      e.target.textContent === '전체' ? '' : e.target.textContent,
    );
  };

  return (
    <div className="filter-bar">
      <FilterButton
        btnData="전체"
        handleClick={handleClick}
      />
      {categories.map((category) => (
        <FilterButton
          key={category}
          btnData={category}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
