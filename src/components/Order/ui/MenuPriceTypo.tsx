import styled from 'styled-components';

import { Typography } from '../../../atoms';

const MenuPriceTypo = styled(Typography)`
  color: ${({ theme }) => theme.colors.orderCardPrice};
`;

export default MenuPriceTypo;
