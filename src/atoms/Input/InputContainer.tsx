import styled from 'styled-components';
import { InputContainerProps } from './types';

const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  border: ${({ theme }) => `2px solid ${theme.colors.inputBorder}`};
  padding: 0;
  border-radius: 2rem;
`;

export default InputContainer;
