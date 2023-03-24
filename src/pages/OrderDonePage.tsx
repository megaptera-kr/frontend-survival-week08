import { Link } from 'react-router-dom';

export default function OrderDone() {
  return (
    <>
      <p>주문이 완료되었습니다!</p>

      <div>
        <Link to="/">메인화면으로 돌아가기</Link>
      </div>
    </>
  );
}
