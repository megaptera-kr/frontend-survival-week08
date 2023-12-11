import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 250px;
`;

const StyledTitle = styled.span`
  font-family: yg-jalnan;
  font-size: 110px;
  word-break: keep-all;
  line-height: 140px;
  color: ${(props) => props.theme.colors.text};
`;

const StyledSection = styled.section`
  justify-content: center;
  margin-top: 152px;
  display: flex;
  gap: 40px;
`;

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
};

const StyledButton = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? 'button',
}))<ButtonProps>`
  box-sizing: border-box;
  width: 470px;
  height: 591px;
  font-family: yg-jalnan;
  font-size: 48px;
  color:${(props) => props.theme.colors.buttonText};
  border: none;
  border-radius: 40px;
  background: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.colors.buttonHover};
    border: ${(props) => props.theme.colors.buttonHoverBorder};
  }

  img {
    width: 20rem;
    height: 20rem;
  }
`;

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order');
  };
  return (
    <Wrapper>
      <StyledTitle>
        원하시는 주문을
        터치해주세요
      </StyledTitle>
      <StyledSection>
        <StyledButton type="button" onClick={handleClick}>
          <img src="/images/fastfood.png" alt="fastfood icon" />
          매장 주문
        </StyledButton>
        <StyledButton type="button" onClick={handleClick}>
          <img src="/images/bag.png" alt="bag icon" />
          전체 포장
        </StyledButton>
      </StyledSection>
    </Wrapper>
  );
}
