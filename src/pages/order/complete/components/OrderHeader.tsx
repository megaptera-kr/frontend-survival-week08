import styled from 'styled-components';

type OrderHeaderProps = {
orderId: string | undefined;
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    margin-bottom: 1em;
    width: 120px;
  }

  h2 {
    width: 60%;
    text-align: center;
    font-size: 80px;
    font-weight: bold;
    line-height: 96px;
    margin-bottom: 16px;
  }

  p {
    font-size: 48px;
    font-weight: 500;
    line-height: 57.6px;
    color: ${(props) => props.theme.colors.gray02};
  }
`;

export default function OrderHeader({ orderId } : OrderHeaderProps) {
  return (
    <div>
      {orderId ? (
        <Title>
          <img src="/images/complete.png" alt="oreder_complete" />
          <h2>주문이 완료되었습니다!</h2>
          <p>
            주문번호
            {' '}
            {orderId}
          </p>
        </Title>
      ) : (
        <Title>
          <h2>주문을 진행해주세요!</h2>
        </Title>
      )}
    </div>
  );
}
