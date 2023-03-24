import { Link } from 'react-router-dom';

export default function IntroPage() {
  return (
    <>
      <li>
        <Link to="/order">매장 주문</Link>
      </li>

      <li>
        <Link to="/order">전체 포장</Link>
      </li>
    </>

  );
}
