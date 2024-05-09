import { useNavigate } from 'react-router';

function CartButton() {
  const navigate = useNavigate();
  const goToIntro = () => navigate('/');
  const goToResult = () => navigate('/order/complete');
  return (
    <div>
      <button type="button" onClick={goToIntro}>취소</button>
      <button type="button" onClick={goToResult}>주문 하기</button>
    </div>
  );
}

export default CartButton;
