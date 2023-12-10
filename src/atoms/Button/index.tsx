import styled, { css } from 'styled-components';

import ButtonProps from './type';

const Button = styled.button.attrs({ type: 'button' })<ButtonProps>`
  cursor: pointer;

  ${({
    $variant, $width, $height, $borderRadius, theme,
  }) => {
    switch ($variant) {
      case 'ctaPrimary':
        return css`
          border-radius: ${$borderRadius};
          background: ${theme.colors.buttonPrimaryBackground};
          color: ${theme.colors.buttonPrimaryText};
          width: ${$width};
          height: ${$height};
          text-align: center;
          ${theme.typography.button}

          :hover {
            background: ${theme.colors.buttonPrimaryHoverBackground};
          }
        `;

      case 'ctaSecondary':
        return css`
          border-radius: ${$borderRadius};
          background: ${theme.colors.buttonSecondaryBackground};
          color: ${theme.colors.buttonSecondaryText};
          width: ${$width};
          height: ${$height};
          text-align: center;
          ${theme.typography.button}

          :hover {
            background: ${theme.colors.buttonSecondaryHoverBackground};
          }
        `;

      default:
        return null;
    }
  }}
`;

export default Button;
