import styled from 'styled-components';

import Restaurant from '../../types/Restaurant';

import Menu from './Menu';

const RestaurantItemPropsWrapStyle = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderSecondary};

  &:last-child {
    border-bottom: 0;
  }

  h4 {
    font-size: 4.8rem;
    color: ${(props) => props.theme.colors.textPrimary};
    margin-bottom: 2rem;
    font-weight: 700;
    padding-top: 8rem;
  }
`;

type RestaurantItemProps = {
  restaurant: Restaurant;
};

export default function RestaurantItem({ restaurant }: RestaurantItemProps) {
  const { name, menu } = restaurant;
  return (
    <RestaurantItemPropsWrapStyle>
      <h4>{name}</h4>
      <Menu menu={menu} />
    </RestaurantItemPropsWrapStyle>
  );
}
