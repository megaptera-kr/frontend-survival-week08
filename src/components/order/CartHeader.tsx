import styled from 'styled-components';
import Food from '../../types/FoodType';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Pretendard-Regular';
  font-style: normal;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.03em;
`;

const CartTitle = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 33px;
    margin-right: 0.2rem;
  }

  h3 {
    display: inline;
    margin-right: 10px;
  }

  span {
    background: #FF8400;
    border-radius: 30px;
    color: white;
    width: 77px;
    text-align: center;
    font-size: 24px;
  }
`;

const CartPrice = styled.div`
  span {
    color: #FF8400;
  }
`;

function CartHeader({ selectedMenus }: {selectedMenus: Food[]}) {
  const totalPrice = calculateTotalPrice(selectedMenus);
  return (
    <HeaderSection>
      <CartTitle>
        <img src="images/shopping-cart.png" alt="cart" />
        <h3>주문내역</h3>
        <span>
          {selectedMenus.length}
          개
        </span>
      </CartTitle>
      <CartPrice>
        총 결제 예상금액
        {' '}
        <span>{totalPrice.toLocaleString()}</span>
        원
      </CartPrice>
    </HeaderSection>
  );
}

export default CartHeader;
