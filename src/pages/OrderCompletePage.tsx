import React, {
  useContext, useEffect, useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getOrder } from '../apis/app';
import { Order } from '../types/restaurant';
import toLocaleCurrency from '../utils/format';
import { Button } from '../components';
import { StyleContext } from '../context/StyleProvider';
import { Theme } from '../styles/defaultTheme';

const StyledContainer = styled.div<{ isDarkMode: boolean }>`
  background: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.darkgray100 : theme.colors.white)};
  border-radius: 0 8rem 0 0;
  padding: 18rem 5rem 5rem 5rem;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 12rem;
`;

const StyledTitle = styled.h1<{ isDarkMode: boolean }>`
  font-weight: 700;
  font-size: 8rem;
  line-height: 9.6rem;
  margin: 3.2rem 0 1.6rem 0;
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.white : theme.colors.black)};
`;

const StyledOrderId = styled.h3<{ isDarkMode: boolean }>`
  font-size: 4.8rem;
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.gray200 : theme.colors.gray300)}
`;

const StyledDivision = styled.hr<{ isDarkMode: boolean, darkModeColor: keyof Theme['colors'], defaultColor: keyof Theme['colors'], margin: string }>`
  margin: ${({ margin }) => margin};
  border: none;
  border: ${({
    isDarkMode, theme, darkModeColor, defaultColor,
  }) => (isDarkMode ? `1px solid ${theme.colors[darkModeColor]}` : `1px solid ${theme.colors[defaultColor]}`)};
`;

const StyledOrderListHeading = styled.h4<{isDarkMode: boolean}>`
  font-size: 4.8rem;
  font-weight: 700;
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.white : theme.colors.black)};
  padding: 0 3rem;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3.2rem;
  gap: 2.4rem;
  `;

const MenuRow = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.white : theme.colors.black)};
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;

const TotalPriceLabel = styled.span<{ isDarkMode: boolean }>`
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.white : theme.colors.black)};
`;

const TotalPrice = styled.h4`
  font-weight: 700;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.primary}
`;

const StyledButton = styled(Button)`
  font-weight: 500;
  font-size: 2.8rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 31rem;
  border-radius: 8rem;
`;

function OrderCompletePage() {
  const { isDarkMode } = useContext(StyleContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [order, setOrder] = useState<Order>({} as Order);

  const fetchOrder = async () => {
    const res = await getOrder(location.state?.id);

    setOrder(res ?? {});
  };

  useEffect(() => {
    fetchOrder();
  }, [location.state]);

  const handleClickHome = () => {
    navigate('/');
  };

  return (
    <StyledContainer isDarkMode={isDarkMode}>
      <StyledHeader>
        <StyledImg src="images/complete.png" alt="icon" />
        <StyledTitle isDarkMode={isDarkMode}>주문이 완료되었습니다!</StyledTitle>
        <StyledOrderId isDarkMode={isDarkMode}>
          주문번호
          {' '}
          {order?.id}
        </StyledOrderId>
      </StyledHeader>
      <StyledDivision
        margin="8rem auto 3.2rem auto"
        isDarkMode={isDarkMode}
        defaultColor="gray300"
        darkModeColor="white"
      />
      <StyledOrderListHeading isDarkMode={isDarkMode}>주문목록</StyledOrderListHeading>
      <StyledDivision
        margin="3.2rem 0"
        isDarkMode={isDarkMode}
        defaultColor="gray100"
        darkModeColor="gray400"
      />
      <MenuContainer>
        {order?.menu?.map((menu) => (
          <MenuRow key={menu.id} isDarkMode={isDarkMode}>
            <span>{menu.name}</span>
            <span>
              {toLocaleCurrency(menu.price)}
              원
            </span>
          </MenuRow>
        ))}
      </MenuContainer>
      <StyledDivision
        margin="3.2rem 0"
        isDarkMode={isDarkMode}
        defaultColor="gray100"
        darkModeColor="gray400"
      />
      <TotalPriceWrapper>
        <TotalPriceLabel isDarkMode={isDarkMode}>총가격</TotalPriceLabel>
        <TotalPrice>
          {toLocaleCurrency(order?.totalPrice)}
          원
        </TotalPrice>
      </TotalPriceWrapper>
      <StyledDivision
        margin="3.2rem 0"
        isDarkMode={isDarkMode}
        defaultColor="gray100"
        darkModeColor="gray400"
      />
      <StyledButton width="100%" onClick={handleClickHome}>
        메인화면으로 돌아가기
      </StyledButton>
    </StyledContainer>
  );
}

export default OrderCompletePage;
