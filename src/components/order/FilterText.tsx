import styled from 'styled-components';

import Img from '../common/Image';
import TextField from '../common/TextField';
import LabelField from '../common/LabelField';
import useFieldRef from '../../hooks/useFieldRef';

const TextWrapper = styled.section`
  border: solid 1px white;
  border-radius: 1.2rem;
  padding: 1.6rem 1.6rem;
  margin-left: 3.2rem;
  margin-right: 3.2rem;
  display: flex;
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

const SearchLabel = styled(LabelField)``;

const FilterIcon = styled(Img)`
  width: 40px;
  height: 40px;
`;

type FilterTextProps = {
  setFilterText: (v: string) => void;
};

export default function FilterText({ setFilterText }: FilterTextProps) {
  const [, current] = useFieldRef('filter-text');

  return (
    <TextWrapper>
      <SearchText
        id={current}
        placeholder='식당 이름을 입력해주세요'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
      />
      <SearchLabel htmlFor={current}>
        <FilterIcon src='/images/icon-search.png' alt='filer_icon' />
      </SearchLabel>
    </TextWrapper>
  );
}
