import styled from 'styled-components';

type TextFieldProps = {
  query: string;
  setQuery: (query: string) => void;
};

const StyledContainer = styled.div`
  padding-inline: 3rem;
  margin-bottom: 4rem;
`;

const StyledLabel = styled.label`
  display: none;
`;

const StyledInput = styled.input`
  width: 102rem;
  height: 80px;
  padding-inline: 3rem;
  border-radius: 2rem;
  border: 0.2em;
  border: 2px solid ${(props) => props.theme.colors.searchOutline};
  background: url(./images/icon-search.png) 98% 50% / 4rem no-repeat;
  font-family: 'Pretendard';
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 3.8rem;
  letter-spacing: -0.03em;
  text-align: left;
  transition: border-color 0.1s ease-in-out;
  color: white;
  ::placeholder {
    color: white;
  }
`;

export default function TextField({ query, setQuery }: TextFieldProps) {
  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <StyledContainer>
      <StyledLabel htmlFor="search-id">검색</StyledLabel>
      <StyledInput
        id="search-id"
        placeholder="식당 이름을 입력해주세요"
        value={query}
        onChange={handleChangeQuery}
      />
    </StyledContainer>
  );
}
