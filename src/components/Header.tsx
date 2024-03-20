import styled, { css } from 'styled-components';

import Button from './common/Button';

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

type ImgProps = {
  src: string;
  alt: string;
};

const Image = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
  alt: props.alt,
}))<ImgProps>`
  src: ${(props: ImgProps) => props.src};
  alt: ${(props: ImgProps) => props.alt};
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

const Title = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.colors.headingSecondary};
`;

const ButtonWrapper = styled.div`
  background-color: #ffa454;
  border-radius: 2em;
  padding: 0.3em 0.3em;
`;

const ThemeToggleButton = styled(Button)`
  background-color: transparent;
  padding: 0.6em 1.6rem;
  border-radius: 2em;
  margin: 0.1em 0.1em;
  font-weight: 500;

  ${(props) =>
    props.active
      ? css`
          background-color: white;
          color: black;
        `
      : css`
          background-color: transparent;
          color: white;
        `}
`;

type HeaderProps = {
  isDarkMode: boolean;
  setIsDarkMode: () => void;
};

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  return (
    <Wrapper>
      <Image src='/images/logo.png' alt='logo' />
      <SubWrapper>
        <Title>메가테라 푸드코트 키오스크</Title>
        <ButtonWrapper>
          <ThemeToggleButton
            type='button'
            active={!isDarkMode}
            onClick={setIsDarkMode}
          >
            밝게
          </ThemeToggleButton>
          <ThemeToggleButton
            type='button'
            active={!!isDarkMode}
            onClick={setIsDarkMode}
          >
            어둡게
          </ThemeToggleButton>
        </ButtonWrapper>
      </SubWrapper>
    </Wrapper>
  );
}
