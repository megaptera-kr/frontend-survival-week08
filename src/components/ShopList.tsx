import { Fragment } from 'react';
import styled from 'styled-components';
import { Menu, Restaurnant } from '../types/restaurants';
import MenuList from './MenuList';

const Container = styled.div`
  width: 100%;
  border-top-right-radius: 40px;
  background-color: white;
  padding: 0 40px 40px;

  div{
    margin: 40px 0 20px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 57px;
    letter-spacing: -0.03em;
    color: black;
  }
`;

export default function ShopList({ filteredRestaurant, addCart }:{
  filteredRestaurant:Restaurnant[], addCart:(item: Menu) => void
}) {
  return (
    <Container>
      {filteredRestaurant.map((restaurant:Restaurnant) => {
        const { id, name, menu } = restaurant;
        return (
          <Fragment key={id}>
            <div>{name}</div>

            <MenuList menus={menu} addCart={addCart} />
          </Fragment>

        );
      })}
    </Container>
  );
}
