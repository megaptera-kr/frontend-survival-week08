import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { StyleContext } from '../context/StyleProvider';

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 11rem;
  line-height: 14rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 29rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 15.2rem 5rem 48.7rem 5rem;
`;

const StyledButton = styled(Button)<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 47rem;
  height: 59.1rem;
  background: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.darkgray100 : theme.colors.white)};
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.colors.white : theme.colors.black)};

  & > span {
    margin-top: 6rem;
    font-weight: 700;
    font-size: 4.8rem;
  }
`;

const StyledImg = styled.img`
  width: 20rem;
`;

function MainPage() {
  const { isDarkMode } = useContext(StyleContext);
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/order');
  };

  return (
    <div>
      <StyledTitle>원하시는 주문을 터치해주세요</StyledTitle>
      <StyledButtonContainer>
        <StyledButton isDarkMode={isDarkMode} onClick={handleClickButton}>
          <StyledImg src="/images/fastfood.png" alt="fastfood" />
          <span>매장 주문</span>
        </StyledButton>
        <StyledButton isDarkMode={isDarkMode} onClick={handleClickButton}>
          <StyledImg src="/images/bag.png" alt="bag" />
          <span>전체 포장</span>
        </StyledButton>
      </StyledButtonContainer>
    </div>
  );
}

export default MainPage;
