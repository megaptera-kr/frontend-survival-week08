import styled from 'styled-components';
import CartHeader from './CartHeader';
import CartList from './CartList';
import Food from '../../types/FoodType';
import CartButtons from './CartButtons';

const CartSection = styled.div`
  background: #F4F4F4;
  padding: 30px;
`;

type CartProps = {
  selectedMenus: Food[],
  setSelectedMenus: React.Dispatch<React.SetStateAction<Food[]>>,
}

function Cart({ selectedMenus, setSelectedMenus }:CartProps) {
  return (
    <CartSection>
      <CartHeader selectedMenus={selectedMenus} />
      <CartList selectedMenus={selectedMenus} setSelectedMenus={setSelectedMenus} />
      <CartButtons />
    </CartSection>
  );
}

export default Cart;
