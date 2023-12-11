import styled from 'styled-components';

import { Typography } from '../../../atoms';

const MenuTitleTypo = styled(Typography)`
  color: ${({ theme }) => theme.colors.orderCardTitle};
`;

export default MenuTitleTypo;
