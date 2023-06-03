import styled from 'styled-components';
import { Menu } from '../../types/restaurant';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  margin-bottom: 16rem;
  ul {
    width: 100%;
    padding: 3.2rem 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.sub.separation};
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.4rem;
    font-size: 3.2rem;
  }
`;

const Title = styled.h3`
  width: 100%;
  font-size: 4rem;
  padding: 3.2rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.sub.separation};
`;

const MenuItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Result = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 0;
  font-size: 3.2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.sub.separation};
`;

const StrongText = styled.strong`
  font-size: 4.8rem;
  color: ${(props) => props.theme.colors.main.strong};
`;

type Props = {
  orderMenu: Menu[];
  totalPrice: number;
}

export default function OrderList({ orderMenu, totalPrice }:Props) {
  return (
    <Container>
      <Title>주문목록</Title>
      <ul>
        {orderMenu.map((menu) => (
          <MenuItem
            key={menu.id}
          >
            <p>{menu.name}</p>
            <p>
              {menu.price.toLocaleString()}
              원
            </p>
          </MenuItem>
        ))}
      </ul>
      <Result>
        <p>총가격</p>
        <StrongText>
          {totalPrice.toLocaleString()}
          원
        </StrongText>
      </Result>
    </Container>
  );
}
