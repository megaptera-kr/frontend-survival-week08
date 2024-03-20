import { useNavigate } from 'react-router';

import styled from 'styled-components';

import Button from '../common/Button';
import Image from '../common/Image';
import { WordH2 } from '../common/Word';

const OrderKind = styled(Button)`
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 40px;
  padding: 11.4em 8.6em;
  display: flex;

  :hover {
    background-color: #fff1dc;
  }
`;

const OrderKindImage = styled(Image)`
  width: 200px;
  height: 200px;
`;

const OrderKindWord = styled(WordH2)`
  margin-top: 3rem;
  color: black;
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/order`, { state: { text } });
  };

  return (
    <OrderKind onClick={handleClick}>
      <OrderKindImage src={src} alt={alt} />
      <OrderKindWord text={text} />
    </OrderKind>
  );
}
