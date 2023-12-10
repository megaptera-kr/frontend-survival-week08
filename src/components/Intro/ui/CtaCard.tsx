import styled from 'styled-components';

import { Card } from '../../../atoms';

const CtaCard = styled(Card)<{ $isDarkmode: boolean }>`
  width: 50%;
  height: 59rem;
  flex-direction: column;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.introCardBackground};

  :hover {
    ${({ $isDarkmode, theme }) => ($isDarkmode
    ? { border: `3px solid ${theme.colors.introCardHover}` }
    : { background: theme.colors.introCardHover })}
  }
`;

export default CtaCard;
