import { ChangeEvent, ReactNode, useRef } from 'react';
import styled from 'styled-components';

type TextFieldProps = {
  label:string|ReactNode;
  placeholder:string;
  filterText:string;
  setFilterText:(text:string) => void
}

const StyledTextField = styled.div`
  padding-inline: 30px;
`;

const StyledLabel = styled.label`
  display: none;
`;

const StyledInput = styled.input`
  width:100%;
  height:80px;
  padding-left: 30px;
  border-radius: 20px;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSize.ml};
  border: ${(props) => `2px solid ${props.theme.colors.input_border}`};
  color:${(props) => props.theme.colors.title};
  background-size: 40px;
  background-repeat:no-repeat;
  background-position: 98% 50%;
  background-image: url('./images/icon-search.png');


  ::placeholder {
    color:${(props) => props.theme.colors.title};
  }
`;

function TextField({
  label,
  placeholder,
  filterText,
  setFilterText,
}:TextFieldProps) {
  const id = useRef(`input-${label}`);
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  return (
    <StyledTextField>
      <StyledLabel htmlFor={id.current}>
        {label}
      </StyledLabel>
      <StyledInput
        id={id.current}
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </StyledTextField>
  );
}

export default TextField;
