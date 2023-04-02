import styled from 'styled-components';
import Order from '../types/Order';
import complete from '../../static/images/complete.png';

type OrderCompleteProps = {
  order: Order;
};

const Container = styled.div`
  padding-block: 1em 3em;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  border-top-right-radius: ${(props) => props.theme.sizes.contentBorderRadius};
  background: ${(props) => props.theme.colors.secondary};
  text-align: center;
  font-size: 2.2rem;

  img {
    margin-bottom: .8em;
    width: 15rem;
  }

  h2 {
    margin: 0 auto;
    width: 60%;
    font-size: 5rem;
    word-break: keep-all;
  }

  p {
    font-size: 2.8rem;
    margin: 10px 0 50px 0;
    color: ${(props) => props.theme.colors.boldLine};
  }
  
  h3 {
    font-size: 2.6rem;
    border-top:1px solid ${(props) => props.theme.colors.text};
    text-align: left;
    padding-top: 50px;
  }
  
  ul {
    padding:30px 0; 
    border-top: 1px solid ${(props) => props.theme.colors.line};
    border-bottom: 1px solid ${(props) => props.theme.colors.line};
  }

  li {
    display: flex;
    justify-content: space-between;
    padding:10px 0;
  }

`;

const Totalprice = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
  font-weight: bold;

  span strong {
    color: #FF8400;
    font-size: 2.6rem;
  }
`;

export default function OrderComplete({ order }: OrderCompleteProps) {
  const { menu } = order;

  return (
    <Container>
      <div>
        <img src={complete} alt="" />
        <h2>
          주문이
          완료되었습니다!
        </h2>
        <p>
          주문번호
          {' '}
          {order.id}
        </p>
        <h3>주문목록</h3>
        <ul>
          {menu?.map((menus, index) => {
            const key = `${index}-${menus.name}`;

            return (
              <li key={key}>
                <span>{menus.name}</span>
                <span>
                  {menus.price?.toLocaleString()}
                  원
                </span>
              </li>
            );
          })}
        </ul>
        <Totalprice>
          <span>
            총가격
          </span>
          <span>
            <strong>
              {order.totalPrice?.toLocaleString()}
              원
            </strong>
          </span>
        </Totalprice>
      </div>
    </Container>
  );
}
