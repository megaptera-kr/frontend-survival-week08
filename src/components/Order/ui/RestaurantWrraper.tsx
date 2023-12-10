import styled from 'styled-components';

import { Stack } from '../../../atoms';

const RestaurantWrraper = styled(Stack)`
  padding: 8rem 0;

  :not(:last-of-type) {
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.listBorder}`};
  }
`;

export default RestaurantWrraper;
