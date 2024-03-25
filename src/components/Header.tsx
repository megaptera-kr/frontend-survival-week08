import { useNavigate } from 'react-router';

import styled, { css } from 'styled-components';

import Image from './common/Image';
import Button from './common/Button';
import Title from './common/Title';

const Wrapper = styled.header`
  background-color: transparent;
  padding: 3.2rem 3.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Logo = styled(Image)`
  width: 80px;
  height: 80px;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.toggleBackground};
  border-radius: 2.4rem;
  padding: 0.6rem 0.6rem;
`;

const ThemeToggleButton = styled(Button)`
  padding: 1.2rem 1.8rem;
  border-radius: 20px;
  font-family: ${(props) => props.theme.font.main};
  font-size: 1.6rem;
  color: white;

  ${(props) =>
    props.active
      ? css`
          background-color: ${props.theme.colors.toggleActiveBackground};
          color: ${props.theme.colors.toggleActiveFontColor};
        `
      : css`
          background-color: transparent;
        `};
`;

type HeaderProps = {
  isDarkMode: boolean;
  setIsDarkMode: () => void;
};

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button onClick={() => navigate('/')}>
        <Logo src='/images/logo.png' alt='logo' />
      </Button>
      <SubWrapper>
        <Title>메가테라 푸드코트 키오스크</Title>
        <ButtonWrapper>
          {['밝게', '어둡게'].map((word: string) => (
            <ThemeToggleButton
              key={word}
              active={word === '밝게' ? !isDarkMode : !!isDarkMode}
              onClick={setIsDarkMode}
            >
              {word}
            </ThemeToggleButton>
          ))}
        </ButtonWrapper>
      </SubWrapper>
    </Wrapper>
  );
}
