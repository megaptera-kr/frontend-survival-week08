import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface SearchProps {
    shopName: string,
    setShopName: Dispatch<SetStateAction<string>>
    }

const Container = styled.div`
  display:flex;
  align-items:Center;
  margin: 40px 0 ;
  padding: 0 20px;
  border:1px solid black;
  width:100%;
  box-sizing: border-box;
  height: 80px;
  border: 2px solid #FFFFFF;
  border-radius: 20px;
`;

const SearchKeyInput = styled.input`
  margin-right:auto;
  border:none; 
  background:none;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.03em;
  
  ::placeholder{
    color:white;
  }

  :focus{
    outline: 0;
  }
`;

export default function SearchInput({ shopName, setShopName }:SearchProps) {
  return (
    <Container>
      <SearchKeyInput
        id="input-검색"
        type="text"
        placeholder="식당이름을 입력해주세요"
        value={shopName}
        onChange={(e) => setShopName(e.target.value.trim())}
      />

      <img src="/images/icon-search.png" width={28} height={29} alt="icon-search" />
    </Container>
  );
}
