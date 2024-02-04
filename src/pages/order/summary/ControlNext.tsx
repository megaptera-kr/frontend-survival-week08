import React from 'react';
import { useNavigate } from 'react-router';

export default function ControlNext() {
  const navigate = useNavigate();
  const orderId = 'abcdef';

  return (
    <div className="btns-for-next">
      <button type="button">취소</button>
      <button type="submit" onClick={() => navigate(`/order/complete?orderId=${orderId}`)}>
        주문하기
      </button>
    </div>
  );
}
