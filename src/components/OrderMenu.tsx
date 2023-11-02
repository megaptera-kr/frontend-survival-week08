import styled from 'styled-components';
import Order from '../types/Order';

const Container = styled.div`
  h2 {
    border-top: 2px solid ${(props) => props.theme.colors.boldLine};
    font-size: 4.8rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.line};
    padding: 3.2rem ${(props) => props.theme.sizes.contentPadding};
  }

  ul {
    padding: 3.2rem ${(props) => props.theme.sizes.contentPadding};
    border-bottom: 2px solid ${(props) => props.theme.colors.line};
  }

  li {
    display: flex;
    justify-content: space-between;
    font-size: 3.2rem;
    font-weight: 400;
    padding: 1.5rem 0;
  }

  div:nth-child(3) {
    padding: 3.2rem ${(props) => props.theme.sizes.contentPadding};
    border-bottom: 2px solid ${(props) => props.theme.colors.line};
    font-size: 3.2rem;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p:first-child {
        font-size: 3.2rem;
        font-weight: 700;
      }

      p:nth-child(2) {
        font-size: 4.8rem;
        color: #FF8400;
      }
    }
  }
`;

type OrderMenuProps = {
  order: Order;
}

export default function OrderMenu({ order }: OrderMenuProps) {
  const { menu } = order;

  return (
    <Container>
      <h2>주문목록</h2>
      <ul>
        {menu.map((food, index) => {
          const key = `${index}-${food.name}`;

          return (
            <li key={key}>
              <span>{food.name}</span>
              <span>
                {food.price.toLocaleString()}
                원
              </span>
            </li>
          );
        })}
      </ul>
      <div>
        <span>
          <p>총 가격</p>
          <p>
            {order.totalPrice.toLocaleString()}
            원
          </p>
        </span>
      </div>
    </Container>
  );
}
