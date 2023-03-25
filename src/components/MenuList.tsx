import styled from 'styled-components';
import { Menu } from '../types/restaurants';

const Container = styled.div`
  display:flex;
  justify-content:space-between;
`;

const FoodButton = styled.button`
  display:flex;
  flex-direction:column;
  padding: 40px;
  outline:none;
  background:none;
  width: 30%;
  height: 396px;
  background: #F4F4F4;
  border-radius: 40px;
  cursor: pointer;

  img {
    margin: 0 auto 15px;
  }

  span {
    margin : 7px 0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.03em;
  }
`;

export default function MenuList({ menus, addCart }:{
    menus: Menu[]
    addCart:(item: Menu) => void
}) {
  return (
    <Container>
      {menus.map((menu) => {
        const {
          id, name, price, image,
        } = menu;

        return (
          <FoodButton key={id} type="button" onClick={() => addCart(menu)}>
            <img src={image} width={200} height={200} alt={name} />

            <span>{name}</span>
            <span>
              {price}
              원
            </span>
          </FoodButton>
        );
      })}
    </Container>
  );
}
