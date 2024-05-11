import styled from 'styled-components';
import Food from '../../../types/food';
import convertKRW from '../../../utils/convertKRW';
import getTotalPrice from '../../../utils/getTotalPrice';

type CartHeaderProps = {
  menu:Food[]
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:${(props) => props.theme.colors.text};
`;

const StyledHeaderLeft = styled.div`
  display: flex;
  column-gap:10px;
  align-items: center;

  img {
    width:40px;
  }
`;

const StyledHeaderRight = styled.div`
  font-size: ${(props) => props.theme.fontSize.ml};
`;

const StyledTitle = styled.span`
  font-size: ${(props) => props.theme.fontSize.ml};
`;

const StyledCount = styled.span`
  color:${(props) => props.theme.colors.title};
  padding:6px 16px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.primary};
`;

const StyledPrice = styled.span`
  color:${(props) => props.theme.colors.primary};
`;

function CartHeader({ menu }:CartHeaderProps) {
  const totalPrice = getTotalPrice(menu);
  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <img src="/images/shopping-cart.png" alt="shopping-cart" />
        <StyledTitle>주문내역</StyledTitle>
        <StyledCount>
          {menu.length}
          개
        </StyledCount>
      </StyledHeaderLeft>

      <StyledHeaderRight>
        <span>
          총 결제 예상금액
          {' '}
          <StyledPrice>{convertKRW(totalPrice)}</StyledPrice>
          원
        </span>
      </StyledHeaderRight>
    </StyledHeader>
  );
}

export default CartHeader;
