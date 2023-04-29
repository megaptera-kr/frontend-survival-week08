import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface UseSearchRestaurant {
  searchText: string,
  handleChangeSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function useSearchRestaurant(): UseSearchRestaurant {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchText, setSearchText] = useState(() => (searchParams.get('search') ?? ''));

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchText(value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) {
      searchParams.delete('search');
    } else {
      searchParams.set('search', searchText);
    }

    setSearchParams(searchParams);
  };

  return {
    searchText,
    handleChangeSearchText,
    handleSearch,
  };
}
