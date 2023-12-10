import styled from 'styled-components';

import { Button } from '../../../atoms';

const Tab = styled(Button)<{ $selected: boolean }>`
  flex: 1;
  ${({ theme }) => theme.typography.heading_03}
  padding: 2rem 0;
  border-radius: 2rem 2rem 0 0;
  margin-bottom: -1px;
  background: ${({ theme, $selected }) => ($selected ? theme.colors.selectedButtonBackground : 'transparent')};
  color: ${({ theme, $selected }) => ($selected ? theme.colors.selectedButtonText : theme.colors.white)};
`;

export default Tab;
