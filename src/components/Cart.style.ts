import styled from 'styled-components';

const CartWrap = styled.div`
  background: ${(props) => props.theme.colors.cartlist};
  color: ${(props) => props.theme.colors.secondarytext};
  padding: 3% 4%;
`;

const CartInfoWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const CartInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  img {
    width: 36px;
    height: 40px;
  }

`;

const TotalQty = styled.div`
  font-weight: 600;
  font-size: 3rem;
  letter-spacing: -0.03em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  .order-list {
    line-height: 4rem;
  }

  .total-qty {
    width: 77px;
    height: 41px;
    font-size: 2.2rem;
    background: ${(props) => props.theme.colors.cartTotalQtyBackground};
    color: ${(props) => props.theme.colors.cartTotalQtyColor};
    border-radius: 30px;
    padding-top: 5.5%;
    text-align: center;
    letter-spacing: 0.2rem;
  }
`;

const TotalPrice = styled.div`
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 38px;
  letter-spacing: -0.03em;
  span{
    color: ${(props) => props.theme.colors.cartTotalPrice};
  }
`;

const OrderButtonBox = styled.div`
  width: 100%;
  height: 180px;
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .cancel,
  .order
  {
    width: 485px;
    height: 100px;
    font-family: 'Pretendard-Regular';
    border-radius: 50px;
    font-size: 28px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primarytext};
    border: none;
    cursor: pointer;
  }

  .cancel{
    background: ${(props) => props.theme.colors.cancleButton};
  }

  .cancel:hover{
    background: ${(props) => props.theme.colors.clickedCancleButton};
  }

  .order {
    background: ${(props) => props.theme.colors.orderButton};
  }

  .order:hover {
    background: ${(props) => props.theme.colors.clickedOrderButton};
  }
`;

export {
  CartWrap, CartInfoWrap, CartInfo, TotalQty, TotalPrice, OrderButtonBox,
};
