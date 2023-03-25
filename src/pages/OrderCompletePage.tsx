import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import Receipt from '../types/Receipt';

import orderComplete from '../../static/images/complete.png';

export default function OrderCompletePage() {
  const defaultReceipt = {} as Receipt;
  const [receipt, setReceipt] = useLocalStorage('receipt', defaultReceipt);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    setReceipt(defaultReceipt);
  };

  return (
    <div>
      <ul>
        <li>
          <img src={orderComplete} alt="order-complete" />
        </li>
        <li>
          주문이
          <br />
          완료되었습니다!
        </li>
        <li>
          주문번호
          {receipt.id}
        </li>
      </ul>
      <div>---------</div>
      <div>
        <div>주문목록</div>
        <div>---------</div>
        <ul>
          {
            receipt.menu.map((menu, key) => (
              <li key={`${menu.name + key + 1}`}>
                {menu.name}
                <span>
                  {menu.price.toLocaleString()}
                  원
                </span>
              </li>
            ))
          }

        </ul>
        <div>---------</div>
        <div>
          총 가격
          <span>
            {receipt.totalPrice}
            원
          </span>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={handleClick}
        >
          메인화면으로 돌아가기
        </button>
      </div>
    </div>
  );
}
