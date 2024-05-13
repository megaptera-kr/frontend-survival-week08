import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import useCartStore from '../../hooks/useCartStore';
import usePostOrder from '../../hooks/usePostOrder';
import CartButton from './CartButton';
import CartHeader from './CartHeader';
import CartList from './CartList';

const StyledCart = styled.div`
  padding:40px 50px 50px;
  background-color:${(props) => props.theme.colors.food_bg};
`;

function Cart() {
  const navigate = useNavigate();

  const [{ menu }, cartStore] = useCartStore();
  const { createOrder } = usePostOrder();

  const goToIntro = () => navigate('/');
  const goToResult = async () => {
    if (menu.length === 0) {
      return;
    }

    const id = await createOrder(menu);
    navigate(`/order/complete?orderId=${id}`);
  };

  useEffect(() => () => cartStore.clearCart(), []);
  return (
    <StyledCart>
      <CartHeader menu={menu} />

      <CartList menu={menu} />

      <CartButton goToIntro={goToIntro} goToResult={goToResult} />
    </StyledCart>
  );
}

export default Cart;
