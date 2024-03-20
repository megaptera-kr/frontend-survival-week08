import styled from 'styled-components';

type TextFieldProps = {
  placeholder: string;
};

const TextField = styled.input.attrs<TextFieldProps>(() => ({
  type: 'text',
}))<TextFieldProps>`
  background: none;
  border: none;
  outline: none;
`;

export default TextField;
