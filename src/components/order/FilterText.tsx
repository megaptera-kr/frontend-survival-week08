import styled from 'styled-components';

import Img from '../common/Image';
import TextField from '../common/TextField';

const TextWrapper = styled.section`
  border: solid 2px white;
  border-radius: 1.2rem;
  padding: 3.2rem 25px;
  display: flex;
  margin-left: 3.2rem;
  margin-right: 3.2rem;
`;

const SearchText = styled(TextField)`
  font-size: 3.2rem;
  width: 100%;
  color: white;

  ::placeholder {
    color: white;
    font-weight: 400;
  }
`;

const FilterIcon = styled(Img)`
  width: 40px;
  height: 40px;
`;

type FilterTextProps = {
  setFilterText: (v: string) => void;
};

export default function FilterText({ setFilterText }: FilterTextProps) {
  return (
    <TextWrapper>
      <SearchText
        placeholder='식당 이름을 입력해주세요'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
      />
      <FilterIcon src='/images/icon-search.png' alt='filer_icon' />
    </TextWrapper>
  );
}
