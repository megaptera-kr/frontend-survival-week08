import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { container } from 'tsyringe';
import { useLocalStorage } from 'usehooks-ts';
import OrderStore from '../../store/OrderStore';
import { Receipt } from '../../types';

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

type ButtonProps = {
  color?: string;
};

const Button = styled.button<ButtonProps>`
  width: 485px;
  height: 100px;
  font-size: 2.8rem;
  line-height: 3.4rem;
  letter-spacing: -0.03em;
  color: white;
  border-radius: 50px;
  border: none;
  background-color: ${(props) => (props.color ? props.color : '#FF8400')};
  :hover {
    background-color: #170a0c;
  }
`;

function ButtonBox() {
  const navigate = useNavigate();
  const [localReceipt, setLocalReceipt] = useLocalStorage<Receipt[]>(
    'receipts',
    [],
  );

  const store = container.resolve(OrderStore);

  const handleCancel = () => {
    store.reset();
    navigate('/');
  };

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        menu: store.orders,
        totalPrice: store.orders.reduce((acc, order) => order.price + acc, 0),
      }),
    });
    const { receipt } = await res.json();
    setLocalReceipt([...localReceipt, receipt]);
    navigate(`/orders/${receipt.id}`, { state: receipt });
  };

  return (
    <Container>
      <Button type="button" color="#44272B" onClick={handleCancel}>
        취소
      </Button>
      <Button type="button" onClick={handleSubmit}>
        주문 하기
      </Button>
    </Container>
  );
}

export default ButtonBox;
