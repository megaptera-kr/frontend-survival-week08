import styled from 'styled-components';
import extractCategory from '../../utils/extractCategory';
import ButtonField from './ButtonField';
import TextField from './TextField';

const Div = styled.div`
  text-align:center;
`;

export default function SearchBar() {
  const categories = extractCategory();
  return (
    <>
      <TextField />
      <Div>
        {
          ['전체', ...categories].map((category) => (
            <ButtonField key={category} category={category} />
          ))
        }
      </Div>
    </>
  );
}
