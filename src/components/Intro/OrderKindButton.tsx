/* eslint-disable indent */
import { useNavigate } from 'react-router';
import { useDarkMode } from 'usehooks-ts';

import styled, { css } from 'styled-components';

import Button from '../common/Button';
import Image from '../common/Image';
import { WordH2 } from '../common/Word';

const OrderKind = styled(Button)`
  background-color: ${(props) => props.theme.colors.subBackground};
  border-radius: 40px;
  padding: 11.2rem 13rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px transparent; // trick

  :hover {
    ${(props) =>
      // eslint-disable-next-line indent
      !props.isDarkMode
        ? css`
            background-color: ${props.theme.colors.buttonPrimaryHover};
          `
        : css`
            border: solid 1px ${props.theme.colors.bodyHighlight};
          `};
  }
`;

const OrderKindImage = styled(Image)`
  width: 200px;
  height: 200px;
`;

const OrderKindWord = styled(WordH2)`
  margin-top: 3rem;
  color: ${(props) => props.theme.colors.bodyPrimary};
`;

type OrderKindButtonProps = {
  src: string;
  alt: string;
  text: string;
};

export default function OrderKindButton({
  src,
  alt,
  text,
}: OrderKindButtonProps) {
  const { isDarkMode } = useDarkMode(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/order`, { state: { orderType: text } });
  };

  return (
    <OrderKind onClick={handleClick} isDarkMode={isDarkMode}>
      <OrderKindImage src={src} alt={alt} />
      <OrderKindWord text={text} />
    </OrderKind>
  );
}
