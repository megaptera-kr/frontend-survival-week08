/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate, useSearchParams } from 'react-router-dom';

import Order from '../components/order';

function OrderCompletePage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const orderId = searchParam.get('orderId');

  const navigate = useNavigate();

  if (!orderId) {
    navigate('/', { replace: true });
    return null;
  }

  const handleClickBack = () => {
    navigate('/', { replace: true });
  };

  return (
    <article>
      <Order orderId={orderId} onClickBack={handleClickBack} />
    </article>
  );
}

export default OrderCompletePage;
