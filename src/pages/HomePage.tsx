import { useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-block: 10em 25em;
  padding-inline: 3rem;
`;

const StyledOrderMessage = styled.h1`
  font-family: "Jalnan OTF";
  font-size: 11rem;
  font-weight: 700;
  line-height: 14rem;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 1em;
  color: #fff;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const StyledButton = styled.button`
  width: 47rem;
  height: 59.1rem;
  border-radius: 4rem;
  border : none;
  cursor: pointer;
`;

const StyledBtnLogo = styled.img`
  width: 20rem;
  height: 20rem;
  margin-bottom: 6rem;
`;

const StyledText = styled.p`
  font-family: 'Jalnan OTF';
  font-size: 48px;
  font-weight: 700;
  line-height: 51px;
  letter-spacing: -0.03em;
  text-align: center;
`;

export default function HomePage() {
  const navigate = useNavigate();
  const navigateToOrder = () => {
    navigate('/order');
  };

  return (
    <StyledContainer>
      <StyledOrderMessage>원하시는 주문을 터치해주세요</StyledOrderMessage>
      <StyledWrapper>
        <StyledButton type="button" onClick={navigateToOrder}>
          <StyledBtnLogo alt="fastFood" src="/images/fastfood.png" />
          <StyledText>
            매장 주문
          </StyledText>
        </StyledButton>

        <StyledButton type="button" onClick={navigateToOrder}>
          <StyledBtnLogo alt="bag" src="/images/bag.png" />
          <StyledText>
            전체 포장
          </StyledText>
        </StyledButton>
      </StyledWrapper>
    </StyledContainer>
  );
}
