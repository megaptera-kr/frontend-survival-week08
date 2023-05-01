import { Fragment, useContext, useEffect } from 'react';
import styled from 'styled-components';
import RestaurantItem from '../RestaurantItem';
import useRestaurantStore from '../../hooks/useRestaurantStore';
import { StyleContext } from '../../context/StyleProvider';

const StyledContainer = styled.div<{ isDarkMode: boolean }>`
  background: ${({ isDarkMode, theme }) => (isDarkMode ? theme.colors.darkgray100 : theme.colors.white)};
  border-radius: 0 8rem 0 0;
  padding: 0 5rem;
`;

const StyledDivision = styled.hr<{ isDarkMode: boolean }>`
  margin: 0 auto;
  border: none;
  border: ${({ isDarkMode, theme }) => (isDarkMode ? `1px solid ${theme.colors.gray400}` : `1px solid ${theme.colors.gray100}`)};
  width: 98rem;
`;

export default function RestaurantList() {
  const { isDarkMode } = useContext(StyleContext);
  const [{ restaurants }, store] = useRestaurantStore();

  useEffect(() => {
    store.fetchRestaurant();
  }, []);

  return (
    <StyledContainer isDarkMode={isDarkMode}>
      <ul>
        {restaurants?.map((restaurant, index) => {
          const isNeedDivision = index !== restaurants.length - 1;

          return (
            <Fragment key={restaurant.id}>
              <RestaurantItem restaurant={restaurant} />
              {isNeedDivision && <StyledDivision isDarkMode={isDarkMode} />}
            </Fragment>

          );
        })}
      </ul>
    </StyledContainer>
  );
}
