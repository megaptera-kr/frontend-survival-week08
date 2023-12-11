import styled from 'styled-components';

import { Typography } from '../../../atoms';

const CountChip = styled(Typography)`
  padding: 0.6rem 1.6rem;
  background: ${({ theme }) => theme.colors.countChip};
  border-radius: 3rem;
`;

export default CountChip;
