import styled from 'styled-components';
import { StyledInputProps } from './types';

const StyledInput = styled.input<StyledInputProps>`
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 2rem 3rem 2rem 3rem;
  color: ${({ theme }) => theme.colors.inputText};
  background: transparent;

  ${({ theme }) => theme.typography.body_02};

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
  }
`;

export default StyledInput;
