type MessageProps = {
  orderId: string;
}

export default function Message({ orderId }: MessageProps) {
  return (
    <div>
      <span>이미지</span>
      <h2>주문이 완료되었습니다!</h2>
      <p>
        {`주문번호 ${orderId}`}
      </p>
    </div>
  );
}
