import styled from 'styled-components';
import { container } from 'tsyringe';
import OrderStore from '../../store/OrderStore';
import { Menu, Restaurant } from '../../types';

const Container = styled.div`
  box-sizing: border-box;
  padding: 80px 20px;
  border-bottom: 2px solid ${(props) => props.theme.colors.border1};
`;

const Title = styled.h1`
  font-family: 'Pretendard-Regular';
  font-size: 4.8rem;
  font-weight: 700;
  user-select: none;
  color: ${(props) => props.theme.colors.restaurantTitle};
`;

const CardBox = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 20px;
`;

const FoodCard = styled.div`
  width: 310px;
  height: 396px;
  cursor: pointer;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.foodCardBg};
  border: 3px solid ${(props) => props.theme.colors.foodCardBg};
  border-radius: 40px;
  padding: 40px 30px;
  user-select: none;
  :hover {
    background-color: ${(props) => props.theme.colors.foodHoverBg};
    border: 3px solid #ff8400;
    border-radius: 40px;
  }
`;

const FoodName = styled.p`
  font-family: 'Pretendard-Regular';
  font-size: 3.2rem;
  line-height: 3.8rem;
  line-height: -0.03em;
  font-weight: 600;
  color: ${(props) => props.theme.colors.restaurantTitle};
`;

const FoodPrice = styled(FoodName)`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.restaurantTitle};
`;

const FoodImg = styled.img`
  margin: 0px 25px 30px 25px;
`;

type RestaurantProps = {
  restaurant: Restaurant;
};

function RestaurantCard({ restaurant }: RestaurantProps) {
  const store = container.resolve(OrderStore);
  const handleAdd = (m: Menu) => {
    store.add(m);
    store.forceUpdate();
  };
  return (
    <Container>
      <Title>{restaurant.name}</Title>
      <CardBox>
        {restaurant.menu.map((m) => (
          <FoodCard key={m.id} onClick={() => handleAdd(m)}>
            <FoodImg
              src={m.image}
              alt={`${m.name}_image`}
              style={{ width: '200px' }}
            />
            <FoodName>{m.name}</FoodName>
            <FoodPrice>{`${m.price.toLocaleString()} 원`}</FoodPrice>
          </FoodCard>
        ))}
      </CardBox>
    </Container>
  );
}

export default RestaurantCard;
