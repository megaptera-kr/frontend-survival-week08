import styled from 'styled-components';

import { SwitchContainerProps } from './types';
import { center } from '../../theme/commonStyles';

const SwitchContainer = styled.button.attrs({
  type: 'button',
})<SwitchContainerProps>`
  width: 20.8rem;
  height: 6.4rem;

  background-color: ${({ theme }) => theme.colors.switchBackground};

  border-radius: 3rem;
  border: none;

  padding: 0.64rem;
  position: relative;
  cursor: pointer;

  ${center}
`;

export default SwitchContainer;
