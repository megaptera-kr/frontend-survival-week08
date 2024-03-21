import styled from 'styled-components';

type LabelFieldProps = {
  htmlFor: string;
  children: React.ReactNode;
};

const LabelField = styled.label.attrs<LabelFieldProps>((props) => ({
  htmlFor: props.htmlFor,
}))<LabelFieldProps>`
  background: none;
  border: none;
  outline: none;
`;

export default LabelField;
