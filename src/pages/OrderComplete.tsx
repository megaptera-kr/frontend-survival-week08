import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Receipt from '../Components/order/Receipt';

const StyledContainer = styled.div`

`;

export default function OrderComplete() {
  const navigate = useNavigate();
  const [param] = useSearchParams();
  const OrderId = param.get('orderId');

  const navigateToHome = () => {
    navigate('/');
  };

  if (!OrderId) {
    navigate('/');
    return null;
  }

  return (
    <StyledContainer>
      <Receipt orderId={OrderId} navigateToHome={navigateToHome} />
    </StyledContainer>
  );
}
