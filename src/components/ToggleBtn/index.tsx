import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

const Container = styled.div`
  display: flex;
  width: 208px;
  height: 64px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.toggleBtnBoxBg};
  padding: 6.4px 5px;
  gap: 2px;
`;

type BtnProps = {
  toggle: boolean;
};

const Button = styled.button.attrs({
  type: 'button',
})<BtnProps>`
  width: 50%;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.toggle ? props.theme.colors.toggleBtnBg : 'transparent'};
  color: ${(props) =>
    props.toggle ? props.theme.colors.toggleBtntext : 'white'};
  transition: background-color 0.5s;
  :hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
  }
`;

function ToggleBtn() {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <Container>
      <Button toggle={!isDarkMode} onClick={toggle}>
        밝게
      </Button>
      <Button toggle={isDarkMode} onClick={toggle}>
        어둡게
      </Button>
    </Container>
  );
}

export default ToggleBtn;
