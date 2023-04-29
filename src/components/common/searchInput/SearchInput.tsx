/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributes, useRef } from 'react';

import * as S from './SearchInput.styled';

interface SearchInputProps extends HTMLAttributes<HTMLInputElement>{
  id: string;
  className?: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function SearchInput({
  id, className, label, placeholder, value, onChange, onSearch, ...inputProps
}: SearchInputProps) {
  const inputId = useRef(`search-${id}`);
  return (
    <S.SearchForm className={className} role="search" autoComplete="off" onSubmit={onSearch}>
      <img src="/images/icon-search.png" alt="" />
      <label htmlFor={inputId.current}>{label}</label>
      <input
        {...inputProps}
        id={inputId.current}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </S.SearchForm>
  );
}
