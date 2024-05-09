type ReceiptHeaderProps = {
  orderId:string;
}

function ReceiptHeader({ orderId }:ReceiptHeaderProps) {
  return (
    <header>
      <h2>주문이 완료되었습니다!</h2>
      <p>
        {`주문번호 ${orderId}`}
      </p>
      <hr />
    </header>
  );
}

export default ReceiptHeader;
