import styled from 'styled-components';

import { Stack } from '../../../atoms';

const Container = styled(Stack)`
  position: relative;
  background: ${({ theme }) => theme.colors.listBackground};
  border-radius: 0 8rem 0 0;
  padding: 18rem 3rem 5rem 3rem;
`;

export default Container;
