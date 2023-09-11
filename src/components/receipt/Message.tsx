import styled from 'styled-components';

const MessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.receiptLine};
  font-size: 8rem;
  font-weight: bold;

  & img {
    display: block;
    width: 1.5em;
    margin-bottom: 0.5em;
  }

  & h2 {
    width: 60%;
    margin-bottom: 0.2em;
    text-align: center;
  }

  & p {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.oredrId}
  }
`;

type MessageProps = {
  orderId: string;
}

export default function Message({ orderId }: MessageProps) {
  return (
    <MessageWrap>
      <img src="/images/complete.png" alt="complete" />
      <h2>주문이 완료되었습니다!</h2>
      <p>
        {`주문번호 ${orderId}`}
      </p>
    </MessageWrap>
  );
}
