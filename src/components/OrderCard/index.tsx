import styled from 'styled-components';

const Card = styled.a`
  width: 470px;
  background-color: ${(props) => props.theme.colors.cardBg};
  border-radius: 40px;
  padding: 138px 135px 142px 135px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.5s;
  text-decoration: none;
  :hover {
    background-color: ${(props) => props.theme.colors.cardHoverBg};
    outline: 3px solid #ff8400;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Title = styled.h3`
  font-family: 'Jalnan';
  font-size: 4.8rem;
  font-style: normal;
  font-weight: 700;
  margin-top: 60px;
  letter-spacing: -0.03em;
  line-height: 50px;
  color: ${(props) => props.theme.colors.cardText};
  text-decoration: none;
`;

type OrderCardProps = {
  imgName: string;
  title: string;
};

function OrderCard({ imgName, title }: OrderCardProps) {
  return (
    <Card href="/restaurants">
      <Image src={`/images/${imgName}.png`} alt={imgName} />
      <Title>{title}</Title>
    </Card>
  );
}

export default OrderCard;
