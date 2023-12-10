import styled from 'styled-components';

import { Stack } from '../../../atoms';

const SuccessMessageWrraper = styled(Stack)`
  flex-direction: column;
  text-align: center;
  gap: 1.6rem;
  padding-bottom: 8rem;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.orderCompleteTitleBorder}`};
`;

export default SuccessMessageWrraper;
