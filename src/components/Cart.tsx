import styled from 'styled-components';
import { useNavigate } from 'react-router';
import useCartStore from '../hooks/useCartStore';
import totalPrice from '../utils/totalPrice';
import CartList from './CartList';
import staticImages from '../../static/staticImages';
import useCreateReceipt from '../hooks/useCreateReceipt';

type CartProps = {
  handleCancel: () => void,
  handleOrderSubmit: () => void,
}

const StyledCart = styled.div`
  padding: 50px;
  background: ${(props) => props.theme.colors.listBackground};
`;

const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 40px;
`;

const StyledCartHeaderParagraph = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.listTitle};
  font-size: 3.2rem;
  line-height: 3.8rem;
  font-weight: 600;
  img {
    width: 34px;
    margin-right: 15px;
  }
`;

const StyledCartCount = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.9rem;
  background-color: ${(props) => props.theme.palette.primary};
  border-radius: 3rem;
  padding: 6px 16px;
  margin-left: 4px;
`;

const StyledCartPrice = styled.span`
  color: ${(props) => props.theme.palette.primary};
  padding-left: 10px;
`;

const StyledCartButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 40px;
`;

const StyledButton = styled.button`
  width: 50%;
  background-color: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 29px 0;
  border-radius: 5rem;
  font-size: 2.8rem;
  line-height: 3.4rem;
  cursor: pointer;
  :hover {
    opacity: .9;
  }
`;

const StyledCencelButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.palette.secondary};
`;

export default function Cart({
  handleCancel, handleOrderSubmit,
}:CartProps) {
  const [, cartStore] = useCartStore();

  return (
    <StyledCart>
      <StyledCartHeader>
        <StyledCartHeaderParagraph>
          <img
            alt="shopping-cart"
            src={staticImages.shoppingCart}
          />
          주문내역
          <StyledCartCount>
            {`${cartStore.cart.length}개`}
          </StyledCartCount>
        </StyledCartHeaderParagraph>
        <StyledCartHeaderParagraph>
          {'총 결제 예상금액 '}
          <StyledCartPrice>{totalPrice(cartStore.cart).toLocaleString('ko-kr')}</StyledCartPrice>
          원
        </StyledCartHeaderParagraph>
      </StyledCartHeader>
      <CartList />
      <StyledCartButtonWrap>
        <StyledCencelButton
          onClick={handleCancel}
        >
          취소
        </StyledCencelButton>
        <StyledButton
          onClick={handleOrderSubmit}
        >
          주문하기
        </StyledButton>
      </StyledCartButtonWrap>
    </StyledCart>
  );
}
