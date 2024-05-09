import { useNavigate } from 'react-router';

function Intro() {
  const navigate = useNavigate();
  const goToOrder = () => navigate('/order');
  return (
    <div>
      <p>원하시는 주문을 터치해주세요</p>
      <button type="button" onClick={goToOrder}>매장 주문</button>
      <button type="button" onClick={goToOrder}>전체 포장</button>
    </div>
  );
}

export default Intro;
