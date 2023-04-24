import styled from 'styled-components';

const FindBox = styled.div`
  position: relative;
  user-select: none;
  padding: 0px 30px;
`;

const FindInput = styled.input.attrs({
  type: 'text',
  placeholder: '식당이름을 입력해주세요',
})`
  width: 100%;
  height: 80px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.searchBorder};
  border-radius: 20px;
  font-family: 'Pretendard-Regular';
  font-size: 3.2rem;
  line-height: 3.8px;
  letter-spacing: -0.03em;
  padding: 20px 30px;
  color: white;
  ::placeholder {
    color: white;
  }
  :focus {
    outline: none;
  }
`;

const Icon = styled.img`
  width: 40px;
  position: absolute;
  right: 50px;
  top: 20px;
  color: ${(props) => props.theme.colors.searchBorder};
`;

type SearchProps = {
  setSearchTerm: (_: string) => void;
};

function Search({ setSearchTerm }: SearchProps) {
  return (
    <FindBox>
      <FindInput onChange={(e) => setSearchTerm(e.target.value)} />
      <Icon src="/images/icon-search.png" alt="search" />
    </FindBox>
  );
}

export default Search;
