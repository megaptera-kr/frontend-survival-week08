import styled, { css } from 'styled-components';

import { column, row, center } from '../../theme/commonStyles';

import StackProps from './type';

const Stack = styled.div<StackProps>`
  ${({
    $direction, $alignItems, $justifyContent, $gap,
  }) => {
    switch ($direction) {
      case 'column':
        return css`
          ${column};
          align-items: ${$alignItems};
          justify-content: ${$justifyContent};
          row-gap: ${$gap};
        `;

      case 'row':
        return css`
          ${row};
          align-items: ${$alignItems};
          justify-content: ${$justifyContent};
          column-gap: ${$gap};
        `;

      case 'center':
        return css`
          ${center};
          gap: ${$gap};
        `;

      default:
        return null;
    }
  }}
`;

export default Stack;
