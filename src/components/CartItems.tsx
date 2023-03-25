import styled from 'styled-components';
import { Menu } from '../types/restaurants';

const Container = styled.div`
    display:grid;
    justify-content:space-between;
    grid-template-columns: 310px 310px 310px;
`;

const Item = styled.div`
    margin-bottom:30px;
    padding: 30px;
    width: 310px;
    height: 156px;
    background: #FFFFFF;
    border-radius: 20px;

    div {
        display:flex;
        justify-content: space-between;
    }

    span {
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: -0.03em;
    }

    button {
        height:30px;
        background-color: white;
    }
`;

const Price = styled.div`
    margin-top:30px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: -0.03em;
    color: #FF8400;

`;

export default function CartItems({ carts, cancelOrder }
:{carts:Menu[], cancelOrder:(idx: number) => void
    }) {
  return (
    <Container>
      {carts?.map((item, idx) => {
        const { id, name, price } = item;
        return (
          <Item key={idx}>
            <div>
              <span>{name}</span>
              <button type="button" onClick={() => cancelOrder(idx)}>✕</button>
            </div>
            <Price>
              {price.toLocaleString()}
              원
            </Price>
          </Item>
        );
      })}
    </Container>
  );
}
