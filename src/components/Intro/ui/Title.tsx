import styled from 'styled-components';

import { Typography } from '../../../atoms';

const Title = styled(Typography)`
  white-space: pre-wrap;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export default Title;
