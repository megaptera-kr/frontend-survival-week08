import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

import Image from '../common/Image';

type Style = {
  isDarkMode: boolean;
}

const OrderButtonContainer = styled.button.attrs({
  type: 'button',
})<Style>`
  width: 47rem;
  height: 59.1rem;

  background: ${(props) => (props.isDarkMode
    ? props.theme.colors.main.secondary : props.theme.colors.main.background)};
  border-radius: 4rem;
  border: 0;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.main.activeBackground};
    border: 3px solid ${(props) => props.theme.colors.main.activeBorder};
  }
`;

const Title = styled.p<Style>`
  color: ${(props) => (props.isDarkMode
    ? props.theme.colors.main.text : props.theme.colors.sub.text)};
  margin-top: 6.8rem;

  font-family: 'Jalnan OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 5.1rem;

  text-align: center;
  letter-spacing: -0.03em;
`;

type Props = {
  image: string;
  name: string;
  handleClick: () => void;
}

export default function OrderButton({
  image, name, handleClick,
}:Props) {
  const { isDarkMode } = useDarkMode();
  return (
    <OrderButtonContainer
      data-testid="order-button"
      isDarkMode={isDarkMode}
      onClick={handleClick}
    >
      <Image
        aria-label={`${image}`}
        width="18.2rem"
        height="18.3rem"
        src={`/images/${image}.png`}
        alt={`${image}`}
      />
      <Title isDarkMode={isDarkMode}>{name}</Title>
    </OrderButtonContainer>
  );
}
