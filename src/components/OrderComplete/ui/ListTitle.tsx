import styled from 'styled-components';

import { Typography } from '../../../atoms';

const ListTitle = styled(Typography)`
  font-weight: 700;
  padding: 3.2rem 4rem;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.orderCompleteListBorder}`};
`;

export default ListTitle;
