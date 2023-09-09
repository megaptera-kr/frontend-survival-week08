import { useNavigate, useSearchParams } from 'react-router-dom';

import Receipt from '../components/receipt';

export default function ReceiptPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');

  if (!orderId) {
    navigate({ pathname: '/' });
    return null;
  }

  const handleClickBackToHome = () => {
    navigate({ pathname: '/' });
  };

  return (
    <Receipt orderId={orderId} onClickBackToHome={handleClickBackToHome} />
  );
}
