import styled from 'styled-components';
import useCartStore from '../hooks/useCartStore';
import Button from './common/button/Button';

const StyledCartList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  li {
    background-color: ${(props) => props.theme.colors.subBackground};
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    padding: 30px;
    color: ${(props) => props.theme.colors.listTitle};
    font-size: 2.8rem;
    line-height: 3.3rem;
    border: 3px solid transparent;
  }
`;

const StyledCartTopText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const StyledCartTopButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

const StyledCartPrice = styled.p`
  color: ${(props) => props.theme.palette.primary};
`;

export default function CartList() {
  const [, cartStore] = useCartStore();

  const handleRemoveItem = (index: number) => {
    cartStore.removeIndexItem(index);
  };
  return (
    <StyledCartList>
      {cartStore.cart.map((food, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`${food.id}-${index}`}>
          <StyledCartTopText>
            <p data-testid={`cart-${food.name}`}>{food.name}</p>
            <StyledCartTopButton
              onClick={() => handleRemoveItem(index)}
            >
              X
            </StyledCartTopButton>
          </StyledCartTopText>
          <StyledCartPrice>{`${food.price.toLocaleString('ko-kr')}원`}</StyledCartPrice>
        </li>
      ))}
    </StyledCartList>
  );
}
