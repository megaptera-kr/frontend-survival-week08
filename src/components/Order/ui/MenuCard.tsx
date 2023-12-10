import styled from 'styled-components';

import { Card } from '../../../atoms';

import { column } from '../../../theme/commonStyles';

const MenuCard = styled(Card)`
  ${column}
  justify-content: space-between;
  width: 33%;
  height: 40rem;
  padding: 4rem 3rem;
  flex-direction: column;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.menuBackground};
  border-radius: 4rem;

  img {
    width: 20rem;
    height: 20rem;
  }

  :hover {
    background: ${({ theme }) => theme.colors.menuHoverBackground};
    border: ${({ theme }) => `3px solid ${theme.colors.menuHoverBorder}`};
  }
`;

export default MenuCard;
