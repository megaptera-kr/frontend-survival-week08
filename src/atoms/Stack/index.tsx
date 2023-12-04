import styled, { css } from 'styled-components';

import { column, row, center } from '../../../styles/commonStyles';

import StackProps from './type';

const Stack = styled.div<StackProps>`
  ${({ $direction, $alignItems, $justifyContent }) => {
    switch ($direction) {
      case 'column':
        return css`
          ${column};
          align-items: ${$alignItems};
          justify-content: ${$justifyContent};
        `;

      case 'row':
        return css`
          ${row};
          align-items: ${$alignItems};
          justify-content: ${$justifyContent};
        `;

      case 'center':
        return css`
          ${center};
        `;

      default:
        return null;
    }
  }}
`;

export default Stack;
