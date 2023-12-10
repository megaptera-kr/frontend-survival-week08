import styled from 'styled-components';

import { center } from '../../theme/commonStyles';

import CardProps from './type';

const Card = styled.div<CardProps>`
  ${center}
  border-radius: ${({ $borderRadius }) => $borderRadius || 0};
  gap: ${({ $gap }) => $gap || 0};
`;

export default Card;
