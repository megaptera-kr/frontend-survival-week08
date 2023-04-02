import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

import styled from 'styled-components';
import Order from '../components/Order';

export default function OrderCompletePage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');

  const handleClickBack = () => {
    navigate('/');
  };

  if (!orderId) {
    navigate('/');
    return null;
  }

  const Container = styled.div`
    padding-bottom: 40px;
  `;

  return (
    <Container>
      <Order orderId={orderId} onClickBack={handleClickBack} />
    </Container>
  );
}
