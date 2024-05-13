import styled from 'styled-components';

type ReceiptHeaderProps = {
  orderId:string;
}

const StyledReceiptHeader = styled.header`
  width: 570px;
  text-align:center;
  padding-top:180px;
  margin-inline:auto;

  h2 {
    padding:32px 0 16px;
    color:${(props) => props.theme.colors.text};
    font-size:${(props) => props.theme.fontSize.xxl};
    font-family: ${(props) => props.theme.fontFamily.Jalnan};
  }

  p {
    font-size:${(props) => props.theme.fontSize.xl};
    font-weight:${(props) => props.theme.fontWeight.medium};
    color:${(props) => props.theme.colors.text_secondary};
  }

  img {
    width: 120px;
    height: 120px;
  }
`;

function ReceiptHeader({ orderId }:ReceiptHeaderProps) {
  return (
    <StyledReceiptHeader>
      <img src="/images/complete.png" alt="complete" />
      <h2>주문이 완료되었습니다!</h2>
      <p>
        {`주문번호 ${orderId}`}
      </p>
    </StyledReceiptHeader>
  );
}

export default ReceiptHeader;
