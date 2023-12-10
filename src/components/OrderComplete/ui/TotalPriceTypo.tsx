import styled from 'styled-components';

import { Typography } from '../../../atoms';

const TotalPriceTypo = styled(Typography)`
  font-weight: 700;
  padding: 3.2rem 4rem;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.orderCompleteListBorder}`};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.orderCompleteTotalPrice};

  span {
    ${({ theme }) => theme.typography.subHead_02};
    color: ${({ theme }) => theme.colors.defaultText};
    font-weight: 700;
  }
`;

export default TotalPriceTypo;
