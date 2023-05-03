import styled from 'styled-components';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { postOrders } from '../../apis/app';
import { Menu } from '../../types/restaurant';
import toLocaleCurrency from '../../utils/format';
import useOrderStore from '../../hooks/useOrderStore';
import { Button } from '../Button';
import { Theme } from '../../styles/defaultTheme';
import { StyleContext } from '../../context/StyleProvider';

const StyledContainer = styled.div<{ isDarkMode: boolean }>`
  padding: 4rem 5rem 5rem 5rem;
  background: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.darkgray200 : theme.colors.gray100)}
`;

const StyledCartImg = styled.img`
  width: 4rem;
`;

const StyledBadge = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  padding: .7rem 1.6rem .5rem 1.6rem;
  border-radius: 3rem;
`;

const StyledText = styled.span<{ isDarkMode: boolean; color?: keyof Theme['colors'] }>`
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 3.8rem;
  color: ${({ color, theme, isDarkMode }) => {
    if (color) {
      return theme.colors[color];
    }

    return isDarkMode ? theme.colors.white : theme.colors.black;
  }}
`;

const StyledOrderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4.6rem;

  & > :first-of-type {
    display: flex;
    align-items: center;
    gap: .6rem;
  }

  & > :last-of-type {
    display: flex;
    align-items: center;
    gap: .6rem;
  }
`;

const StyledMenuContainer = styled.ul`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const StyledMenu = styled.li<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  width: 31rem;
  height: 15.6rem;
  background: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.darkgray100 : theme.colors.white)};
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.white : theme.colors.black)};
  border-radius: 2rem;
  font-size: 2.8rem;

  & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > span:last-of-type {
    color: ${({ theme }) => theme.colors.primary};
  }

`;

const StyledCancelButton = styled.button<{isDarkMode: boolean}>`
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 2.8rem;
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.white : theme.colors.black)};
  margin-top: -1rem;
`;

export default function Cart() {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(StyleContext);
  const [{ cart }, store] = useOrderStore();
  const totalPrice = cart.reduce((prev, cur) => prev + cur.price, 0);

  const handleClickRemoveMenu = (menu: Menu) => () => {
    store.setCart?.(cart.filter((cartMenu) => cartMenu.id !== menu.id));
  };

  const handleClickCancelMenu = () => {
    store.setCart?.([]);
  };

  const handleClickOrderMenu = async () => {
    const { id } = await postOrders({
      menu: cart,
      totalPrice,
    });

    store.setCart?.([]);
    navigate('/orderComplete', { state: { id } });
  };

  return (
    <StyledContainer isDarkMode={isDarkMode}>
      <StyledOrderHeader>
        <div>
          <StyledCartImg src="/images/shopping-cart.png" alt="cart" />
          <StyledText isDarkMode={isDarkMode}>주문내역</StyledText>
          <StyledBadge>
            {cart?.length}
            개
          </StyledBadge>

        </div>
        <div>
          <StyledText isDarkMode={isDarkMode}>
            총 결제 예상금액
          </StyledText>
          <StyledText isDarkMode={isDarkMode} color="primary">
            {toLocaleCurrency(totalPrice)}
          </StyledText>
          <StyledText isDarkMode={isDarkMode}>원</StyledText>
        </div>
      </StyledOrderHeader>
      <StyledMenuContainer>
        {cart?.map((menu) => (
          <StyledMenu isDarkMode={isDarkMode} key={menu.id}>
            <div>
              <span>{menu.name}</span>
              <StyledCancelButton
                type="button"
                isDarkMode={isDarkMode}
                onClick={handleClickRemoveMenu(menu)}
              >
                x
              </StyledCancelButton>
            </div>
            <span>
              {toLocaleCurrency(menu.price)}
              원
            </span>
          </StyledMenu>
        ))}
      </StyledMenuContainer>
      <div>
        <Button
          width="48.5rem"
          height="10rem"
          bgColor="brown100"
          color="white"
          fontSize="2.8rem"
          onClick={handleClickCancelMenu}
        >
          취소
        </Button>
        <Button
          width="48.5rem"
          height="10rem"
          bgColor="primary"
          color="white"
          fontSize="2.8rem"
          onClick={handleClickOrderMenu}
        >
          주문하기
        </Button>
      </div>
    </StyledContainer>
  );
}
