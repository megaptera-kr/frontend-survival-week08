import styled from 'styled-components';
import search from '../../static/images/icon-search.png';

const Container = styled.div`
  padding-block: 1em 2em;
  
  input {
    font-size: 2rem;
    padding: .6em;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.textFieldBorder};
    border-radius: 1.5rem;
    background: url('${search}') no-repeat 98% 50% / 4rem;
    color: #FFFFFF;
  }
  
  input::placeholder {
    color: #FFFFFF;
  }
`;

type SearchBarProps = {
  filterText:string;
  setFilterText: (value:string) => void;
  placeholder: string;
}

export default function SearchBar({
  filterText, setFilterText, placeholder,
} : SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };

  return (
    <Container>
      <input
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </Container>
  );
}
