import styled from 'styled-components';
import Restaurants from '../../types/Restaurants';
import Menu from './Menu';

const StyledRow = styled.tr`
  display: flex;
  flex-direction: column;
  padding-block: 3em;
  color: ${(props) => props.theme.colors.text};

  td:first-of-type {
    font-family: 'Pretendard';
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 5.7rem;
    letter-spacing: -0.03em;
    text-align: left;
    margin-bottom: 2rem;
  }
  td:last-of-type {
    width: 100%;
  }
`;

type RestaurantRowProps = {
    restaurant: Restaurants
}

export default function RestaurantRow({ restaurant } :RestaurantRowProps) {
  return (
    <StyledRow>
      <td>{restaurant.name}</td>
      <td>
        <Menu menu={restaurant.menu} />
      </td>
    </StyledRow>
  );
}
