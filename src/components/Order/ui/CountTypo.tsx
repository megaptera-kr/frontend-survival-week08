import styled from 'styled-components';

import { Typography } from '../../../atoms';

const CountTypo = styled(Typography)`
  span {
    color: ${({ theme }) => theme.colors.countChip};
  }
`;

export default CountTypo;
