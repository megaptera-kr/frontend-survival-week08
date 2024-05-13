import styled from 'styled-components';
import useCartStore from '../../../hooks/useCartStore';
import Food from '../../../types/food';
import convertKRW from '../../../utils/convertKRW';
import StyledButton from '../../Button';

type CartListProps = {
  menu:Food[]
}

const StyledCartList = styled.ul`
  display:flex;
  flex-wrap:wrap;
  gap: 25px;
  margin-block: 40px;
`;

const StyledMsg = styled.p`
  text-align: center;
  margin-block: 40px;
  color:${(props) => props.theme.colors.text};
  font-size:${(props) => props.theme.fontSize.ml};
`;

const StyledCartItem = styled.li`
  position:relative;
  width:310px;
  padding: 30px;
  border-radius:20px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size:${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.text};
  background-color:${(props) => props.theme.colors.restaurant_bg};
`;

const StyledPrice = styled.p`
  padding-top:30px;
  color:${(props) => props.theme.colors.primary};
`;

const StyledXButton = styled(StyledButton)`
  position:absolute;
  top:30px;
  right:30px;
  width:24px;
  height:24px;
  color: ${(props) => props.theme.colors.text};
`;

function CartList({ menu }:CartListProps) {
  const [, cartStore] = useCartStore();
  const handleClick = (id:string) => () => {
    cartStore.removeCart(id);
  };

  if (menu.length === 0) {
    return <StyledMsg>주문하실 메뉴를 선택해주세요.</StyledMsg>;
  }

  return (
    <StyledCartList>
      {menu.map((food) => (
        <StyledCartItem key={food.id}>
          <p>{food.name}</p>
          <StyledPrice>
            {`${convertKRW(food.price)}원`}
          </StyledPrice>
          <StyledXButton onClick={handleClick(food.id)}>X</StyledXButton>
        </StyledCartItem>
      ))}
    </StyledCartList>
  );
}

export default CartList;
