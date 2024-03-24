import styled from 'styled-components';

import Receipt from '../../types/Receipt';

const MessageWrapStyle = styled.div`
  text-align: center;
  img {
    max-width: 12rem;
    margin: 0 auto;
  }

  h2 {
    font-size: 8rem;
    color: ${(props) => props.theme.colors.textPrimary};
    margin: 3.2rem 0 1.6rem;
    font-family: ${(props) => props.theme.fonts.fontFamily};
    line-height: 1.2;
  }

  p {
    font-size: 4.8rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.textSecondary};
    margin-bottom: 8rem;
  }
`;

type MessageProps = {
  order: Receipt;
};

export default function Message({ order }: MessageProps) {
  return (
    <MessageWrapStyle>
      {!order.id ? (
        <h2>주문을 진행해주세요!</h2>
      ) : (
        <>
          <img src="/images/complete.png" alt="완료 아이콘 이미지" />
          <h2>
            주문이
            <br />
            완료되었습니다.
          </h2>
          <p>{`주문번호 ${order.id}`}</p>
        </>
      )}
    </MessageWrapStyle>
  );
}
