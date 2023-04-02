import styled from 'styled-components';
import { container } from 'tsyringe';
import OrderStore from '../../store/OrderStore';
import { Menu } from '../../types';
import ButtonBox from './ButtonBox';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.foodCardBg};
  padding: 40px 50px 50px 50px;
  font-family: 'Pretendard-Regular';
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Head = styled(Flex)`
  display: flex;
  justify-content: space-between;
  h1 {
    color: ${(props) => props.theme.colors.restaurantTitle};
    font-size: 3.2rem;
    font-weight: 600;
    margin-left: 10px;
    margin-right: 6px;
  }
`;

const Icon = styled.img`
  width: 40px;
`;

const MenuCountBox = styled.div`
  text-align: center;
  background-color: #ff8400;
  border-radius: 30px;
  padding: 6px 16px;
  span {
    font-size: 2.4rem;
    letter-spacing: -0.03em;
    font-weight: 500;
    line-height: 2.9rem;
    color: white;
  }
`;

const PriceBox = styled(Flex)`
  h2 {
    color: ${(props) => props.theme.colors.restaurantTitle};
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 3.8rem;
    letter-spacing: -0.03em;
  }
`;

const OrderedBox = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 310px 310px 310px;
  padding: 40px 0px;
`;

const OrderedMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.restaurantBg};
  border-radius: 20px;
`;

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: ${(props) => props.theme.colors.restaurantTitle};
    font-size: 2.8rem;
    line-height: 3.3rem;
    letter-spacing: -0.03em;
    font-weight: 500;
    font-style: normal;
  }
`;

const Price = styled.div`
  span {
    color: #ff8400;
    font-size: 2.8rem;
    line-height: 3.3rem;
    letter-spacing: -0.03em;
    font-weight: 500;
    font-style: normal;
  }
`;

const SvgIcon = styled.svg`
  path {
    color: 'white';
  }
`;

function OrderInfo() {
  const store = container.resolve(OrderStore);

  const items: Menu[] = store.orders.reduce(
    (acc, o) => (acc.includes(o) ? acc : [...acc, o]),
    [],
  );

  const totalPrice = store.orders.reduce((acc, order) => acc + order.price, 0);

  return (
    <Container>
      <Head>
        <Flex>
          <Icon src="/images/shopping-cart.png" alt="shopping-cart" />
          <h1>주문내역</h1>
          <MenuCountBox>
            <span>{`${store.orders.length}개`}</span>
          </MenuCountBox>
        </Flex>
        <PriceBox>
          <h2 style={{ marginRight: '10px' }}>총결제예상금액</h2>
          <h2 style={{ color: '#FF8400' }}>{totalPrice.toLocaleString()}</h2>
          <h2>원</h2>
        </PriceBox>
      </Head>
      <OrderedBox>
        {items.map((item) => (
          <OrderedMenu key={item.id}>
            <Name>
              <span>{item.name}</span>
              <span style={{ color: '#FF8400', fontWeight: '600' }}>
                {
                  store.orders.filter((order) => order.name === item.name)
                    .length
                }
              </span>
              <span onClick={() => store.subtraction(item)}>X</span>
            </Name>
            <Price>
              <span>
                {`${(
                  store.orders.filter((order) => order.name === item.name)
                    .length * item.price
                ).toLocaleString()}원`}
              </span>
            </Price>
          </OrderedMenu>
        ))}
      </OrderedBox>
      <ButtonBox />
    </Container>
  );
}

export default OrderInfo;
