import styled from 'styled-components';
import React from 'react';
import Categories from './Categories';

const SearchBarSection = styled.div`
  margin: 30px 30px 0 30px;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(0,0,0,0);
  border: 1px solid white;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  margin-bottom: 3rem;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.03em;
  background-image: url('images/icon-search.png');
  background-repeat : no-repeat;
  background-size : 50px;
  background-position: right;
  color: white;
  ::placeholder {
    color: white;
  }
`;

type SearchBarProps = {
  setCategoryKeyWord: React.Dispatch<React.SetStateAction<string>>,
  categoryKeyword: string,
  setNameKeyWord: React.Dispatch<React.SetStateAction<string>>,
}

function SearchBar({ setCategoryKeyWord, categoryKeyword, setNameKeyWord }: SearchBarProps) {
  return (
    <SearchBarSection>
      <Input
        type="text"
        placeholder="식당 이름을 입력해주세요"
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
          setNameKeyWord(e.target.value);
        }}
      />
      <Categories categoryKeyword={categoryKeyword} setCategoryKeyWord={setCategoryKeyWord} />
    </SearchBarSection>
  );
}

export default SearchBar;
