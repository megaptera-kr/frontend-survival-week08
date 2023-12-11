import styled from 'styled-components';

import { Stack } from '../../../atoms';

const ListWrraper = styled(Stack)`
  background: ${({ theme }) => theme.colors.listBackground};
  border-radius: 0 8rem 0 0;
  padding: 0 3rem 0rem 3rem;
`;

export default ListWrraper;
