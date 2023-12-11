import styled from 'styled-components';

import { Card } from '../../../atoms';

const Menu = styled(Card)`
  justify-content: space-between;
  align-items: flex-start;
  width: calc((100% - 2 * 2.4rem) / 3);
  height: 15.6rem;
  padding: 3rem;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.orderCardBackground};
  border-radius: 2rem;
`;

export default Menu;
