import React from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function Complete() {
  const { search } = useLocation();
  const query = search.replace('?orderId=', '');

  const navigate = useNavigate();

  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <h3>
        주문번호
      </h3>
      <p>
        {query}
      </p>
      <div>
        <h3>
          주문목록
        </h3>
        <p>
          탕수육 14000원
        </p>
      </div>
      <div>
        <h3>총 가격</h3>
        <p>
          <span>14000</span>
          <span>원</span>
        </p>
      </div>
      <button type="button" onClick={() => { navigate('/'); }}>메인화면으로 돌아가기</button>
    </div>
  );
}
