import styled from 'styled-components';

import Image from '../common/Image';

const OrderButtonContainer = styled.button.attrs({
  type: 'button',
})`
  width: 47rem;
  height: 59.1rem;

  background: ${(props) => props.theme.colors.main.background};
  border-radius: 4rem;
  border: 0;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.main.activeBackground};
    border: 3px solid ${(props) => props.theme.colors.main.activeBorder};
  }
`;

const Title = styled.p`
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
}

export default function OrderButton({ image, name }:Props) {
  return (
    <OrderButtonContainer>
      <Image
        width="18.2rem"
        height="18.3rem"
        src={`/images/${image}.png`}
        alt={`${image}`}
      />
      <Title>{name}</Title>
    </OrderButtonContainer>
  );
}
