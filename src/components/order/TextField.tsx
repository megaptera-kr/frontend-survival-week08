import styled from 'styled-components';

type TextFieldType = {
  label: string;
  placeholder: string;
  filterText: string;
  setFilterText: (value: string) => void;
}

const StyledTextField = styled.div`
  margin-top: 30px;

  label{
    display: none;
  }

  input {
    width: 100%;
    height: 80px;
    font-size: 32px;
    color: ${(props) => props.theme.colors.text};
    box-sizing: border-box;
    background: url('./images/icon-search.png') 98% 50% / 4rem no-repeat;
    border-radius: 20px;
    padding: 21px 30px;
    border: ${(props) => props.theme.colors.searchBorder};
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
`;

export default function TextField({
  label, placeholder, filterText, setFilterText,
}: TextFieldType) {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };

  return (
    <StyledTextField>
      <label htmlFor="textfield">{label}</label>
      <input type="text" placeholder={placeholder} value={filterText} onChange={handleChange} id="textfield" />
    </StyledTextField>
  );
}
