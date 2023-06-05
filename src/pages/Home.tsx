import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import staticImages from '../../static/staticImages';

const StyledHomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 280px 0;
`;

const StyledHomeTitle = styled.h2`
  font-size: 110px;
  font-weight: bold;
  line-height: 140px;
  text-align: center;
  margin-bottom: 152px;
`;

const StyledOrderButtonWrap = styled.div`
  display: flex;
  gap: 5rem;
`;

const StyledOrderButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 14rem;
  border-radius: 4rem;
  border: 3px solid transparent;
  background-color: ${(props) => props.theme.colors.mainButtonBackground};
  cursor: pointer;

  :hover {
    border: 3px solid ${(props) => props.theme.colors.mainButtonBorderHover};
    background-color: ${(props) => props.theme.colors.mainButtonBackgroundHover};
  }
`;

const StyledOrderImage = styled.img`
  width: 182px;
  margin-bottom: 68px;
`;

const StyledOrderText = styled.p`
  font-size: 4.8rem;
  font-weight: bold;
  line-height: 5.1rem;
  color: ${(props) => props.theme.colors.subText};
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <StyledHomeContainer>
      <StyledHomeTitle>원하시는 주문을 터치해주세요</StyledHomeTitle>
      <StyledOrderButtonWrap>
        <StyledOrderButton onClick={() => navigate('/order')}>
          <StyledOrderImage
            alt="store-older"
            src={staticImages.fastfood}
          />
          <StyledOrderText>매장 주문</StyledOrderText>
        </StyledOrderButton>
        <StyledOrderButton onClick={() => navigate('/order')}>
          <StyledOrderImage
            alt="store-older"
            src={staticImages.bag}
          />
          <StyledOrderText>전체 포장</StyledOrderText>
        </StyledOrderButton>
      </StyledOrderButtonWrap>
    </StyledHomeContainer>
  );
}
