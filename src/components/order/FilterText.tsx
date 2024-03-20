import styled from 'styled-components';

import Img from '../common/Image';
import TextField from '../common/TextField';

const TextWrapper = styled.section`
  border: solid 2px white;
  border-radius: 1.2rem;
  padding: 1.6rem 1.6rem;
  display: flex;
  margin-bottom: 3.8rem;
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

export default function FilterText() {
  return (
    <TextWrapper>
      <SearchText placeholder='식당이름을 입력해주세요' />
      <FilterIcon src='/images/icon-search.png' alt='filer_icon' />
    </TextWrapper>
  );
}
