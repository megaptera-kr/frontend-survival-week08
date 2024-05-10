import { useNavigate } from 'react-router';
import styled from 'styled-components';
import IntroButton from './IntroButton';

const StyledIntro = styled.div`
  font-family:${(props) => props.theme.fontFamily.Jalnan};
  font-weight:${(props) => props.theme.fontWeight.bold};
  min-height: 100vh;
`;

const StyledTitle = styled.h2`
  font-size:${(props) => props.theme.fontSize.xxxl};
  color:${(props) => props.theme.colors.title};
  text-align: center;
  margin-block:250px 152px;
`;

function Intro() {
  const navigate = useNavigate();
  const goToOrder = () => navigate('/order');
  return (
    <StyledIntro>
      <StyledTitle>원하시는 주문을 터치해주세요</StyledTitle>
      <IntroButton goToOrder={goToOrder} />
    </StyledIntro>
  );
}

export default Intro;
