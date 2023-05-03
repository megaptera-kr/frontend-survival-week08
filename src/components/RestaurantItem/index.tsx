import styled from 'styled-components';
import { useContext } from 'react';
import { Menu, Restaurant } from '../../types/restaurant';
import toLocaleCurrency from '../../utils/format';
import useOrderStore from '../../hooks/useOrderStore';
import { Button } from '../Button';
import { StyleContext } from '../../context/StyleProvider';

const StyledContainer = styled.li`
  padding: 8rem 0;
`;

const StyledRestaurantName = styled.h3<{ isDarkMode: boolean }>`
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 4.8rem;
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.white : theme.colors.black)};
`;

const StyledMenuButton = styled(Button)<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  background: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.darkgray200 : theme.colors.gray100)};
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.white : theme.colors.black)};
`;

const StyledMenuInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 3rem;
  margin-left: 3rem;
  font-size: 3.2rem;
  font-weight: 600;
`;

const StyledImg = styled.img`
 width: 20rem;
 align-self: center;
`;

const StyledMenuContainer = styled.ul`
  display: flex;
  gap: 2.5rem;
`;

type RestaurantItemProps = {
  restaurant: Restaurant
}
export default function RestaurantItem({ restaurant }: RestaurantItemProps) {
  const { isDarkMode } = useContext(StyleContext);
  const [{ cart }, store] = useOrderStore();

  const handleClickMenu = (menu: Menu) => () => {
    store.setCart?.([...cart, menu]);
  };

  return (
    <StyledContainer>
      <StyledRestaurantName isDarkMode={isDarkMode}>{restaurant.name}</StyledRestaurantName>
      <StyledMenuContainer>
        {restaurant.menu?.map((menu: Menu) => (
          <li key={menu.id}>
            <StyledMenuButton
              name={`#${menu.name}`}
              onClick={handleClickMenu(menu)}
              width="31rem"
              height="39.6rem"
              isDarkMode={isDarkMode}
            >
              <StyledImg src={menu.image} alt="menu" />
              <StyledMenuInfoWrapper>
                <span>
                  {menu.name}
                </span>
                <span>
                  {' '}

                  {toLocaleCurrency(menu.price)}
                  원
                </span>
              </StyledMenuInfoWrapper>

            </StyledMenuButton>
          </li>
        ))}
      </StyledMenuContainer>
    </StyledContainer>
  );
}
