import styled from 'styled-components';

type TextFieldProps = {
  id?: string;
  placeholder: string;
  onChange?: (v: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = styled.input.attrs<TextFieldProps>((props) => ({
  id: props.id ?? '',
  type: 'text',
}))<TextFieldProps>`
  background: none;
  border: none;
  outline: none;
`;

export default TextField;
