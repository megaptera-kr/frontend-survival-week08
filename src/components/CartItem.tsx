import styled from 'styled-components';
import Food from '../types/Food';

const Container = styled.div`
   background: ${(props) => props.theme.colors.background};
   height: 15.6rem;
   border-radius: 2rem;
   padding: ${(props) => props.theme.sizes.contentPadding};
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   font-size: 2.8rem;
   font-weight: 500;
   
   div {
     display: flex;
     justify-content: space-between;
     button {
       background: transparent;
       border: 0;
       font-size: 2.4rem;
       color: ${(props) => props.theme.colors.text};
     }
   }
   span:nth-child(2) {
     color: #FF8400;
   }
 `;

type CartItemProps = {
  index: number;
  food: Food;
  onClickCancel: (index: number) => void;
}

export default function CartItem({
  index, food, onClickCancel,
}: CartItemProps) {
  const { name, price } = food;

  return (
    <Container>
      <div>
        <span>{name}</span>
        <button
          type="button"
          onClick={() => onClickCancel(index)}
        >
          X
        </button>
      </div>
      <span>
        {price.toLocaleString()}
        원
      </span>
    </Container>
  );
}
