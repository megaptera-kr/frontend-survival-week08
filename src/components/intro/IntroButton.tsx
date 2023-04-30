import { useNavigate } from 'react-router';
import styled from 'styled-components';

type IntroButtonProps = {
  src: string,
  alt: string,
  text: string,
}

type ButtonProps = {
  onClick: () => void;
}

const Button = styled.button.attrs((props) => ({
  type: 'button',
  onClick: props.onClick,
}))<ButtonProps>`
  background: ${(props) => props.theme.colors.introButtonNotActive};
  border: 1px solid ${(props) => props.theme.colors.introButtonNotActive};
  border-radius: 40px;
  margin: 10px;
  padding: 15rem;
  cursor: pointer;
  img {
    width: 180px;
    display: block;
    margin-bottom: 3rem;
  }
  span {
    font-family: 'yg-jalnan';
    font-weight: 700;
    font-size: 3rem;
    line-height: 51px;
    text-align: center;
    line-height: -0.03em;
    color: ${(props) => props.theme.colors.introButtonColor};
  }
  &:hover {
    background: ${(props) => props.theme.colors.introButtonActive};
    border: 1px solid #FF8400;
  }
`;

function IntroButton({ src, alt, text }: IntroButtonProps) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => {
      navigate('/order');
    }}
    >
      <img src={src} alt={alt} />
      <span>
        {text}
      </span>
    </Button>
  );
}

export default IntroButton;
