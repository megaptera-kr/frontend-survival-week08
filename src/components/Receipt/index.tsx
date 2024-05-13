import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ReceiptHeader from './ReceiptHeader';
import ReceiptList from './ReceiptList';
import ResetButton from './ResetButton';

const StyledReceipt = styled.div`
  border-radius:0 40px 0 0;
  padding-inline: 50px;
  background-color: ${(props) => props.theme.colors.restaurant_bg};
`;

function Receipt() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId') ?? '';
  const goToIntro = () => navigate('/');

  useEffect(() => {
    if (!orderId) {
      navigate('/');
    }
  }, []);
  return (
    <StyledReceipt>
      <ReceiptHeader orderId={orderId} />

      <ReceiptList orderId={orderId} />

      <ResetButton goToIntro={goToIntro} />
    </StyledReceipt>
  );
}

export default Receipt;
