import styled from 'styled-components';
import Image from '../common/Image';

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.main.separation};
`;

const Title = styled.h2`
  width: 60%;
  text-align: center;
  font-size: 8rem;
  margin: 3.2rem 0 1.6rem;
`;

const SubTitle = styled.h3`
  font-size: 4.8rem;
  color: ${(props) => props.theme.colors.sub.secondary};
  margin-bottom: 8rem;
`;

type Props = {
  orderId: string;
}
export default function CompleteHeader({ orderId }: Props) {
  return (
    <Header>
      <Image
        aria-label="complete"
        width="12rem"
        height="12rem"
        src="/images/complete.png"
        alt="complete"
      />
      <Title>주문이 완료되었습니다!</Title>
      <SubTitle>
        주문번호:
        {' '}
        {orderId}
      </SubTitle>
    </Header>
  );
}
