import styled from 'styled-components';
import Food from '../types/Food';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const Container = styled.div`
   font-size: 3.2rem;
   font-weight: 600;
   display: flex;
   align-items: center;
   justify-content: space-between;
   h2 {
     display: flex;
     align-items: center;
     span:nth-child(2) {
       margin-right: .6rem;
     }
     span:nth-child(3) {
       background: #FF8400;
       color: ${(props) => props.theme.colors.secondary};
       border-radius: ${(props) => props.theme.sizes.contentPadding};
       padding: .6rem 1.6rem;
       font-size: 2.4rem;
       font-weight: 500;
     }
   }
   img {
     width: 4rem;
     height: 4rem;
     margin-right: 1rem;
   }
   strong {
     color: #FF8400;
   }
 `;

 type SummaryProps = {
   selectedMenu: Food[];
 }

export default function Summary({ selectedMenu }: SummaryProps) {
  const totalPrice = calculateTotalPrice(selectedMenu);

  const count = selectedMenu.length;
  return (
    <Container>
      <h2>
        <img src="/images/shopping-cart.png" alt="shopping-cart" />
        <span>
          주문내역
        </span>
        <span>
          {count}
          개
        </span>
      </h2>
      <div>
        총 결제 예상금액
        {' '}
        <strong>
          {totalPrice.toLocaleString()}
        </strong>
        원
      </div>
    </Container>
  );
}
