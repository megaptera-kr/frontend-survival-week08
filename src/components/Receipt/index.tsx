import { useNavigate, useSearchParams } from 'react-router-dom';
import ReceiptHeader from './ReceiptHeader';
import ReceiptList from './ReceiptList';
import ResetButton from './ResetButton';

function Receipt() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId') ?? '';
  const goToIntro = () => navigate('/');
  return (
    <div>
      <ReceiptHeader orderId={orderId} />

      <ReceiptList orderId={orderId} />

      <ResetButton goToIntro={goToIntro} />
    </div>
  );
}

export default Receipt;
