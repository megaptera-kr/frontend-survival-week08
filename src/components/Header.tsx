import styled, { css } from 'styled-components';

import { useDarkMode } from 'usehooks-ts';

import logo from '../../static/images/logo.png';

const HeaderWrap = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  padding: 40px 15px;
`;

const Logo = styled.img`
  width: 68px;
  height: 60px;
`;

const Title = styled.span`
  width: 70%;
  height: 60px;
  font-weight: 500;
  line-height: 66px;
  font-size: 4rem;
  padding-left: 3%;
  text-align: left;
  letter-spacing: 0.04em;
  font-family: 'yg-jalnan';
`;

const Switch = styled.div`
  width: 30%;
  font-size: 20px;
  font-size: 2rem;
  font-weight: 500;
  line-height: 6rem;
  text-align: center;
  padding-left: 5%;
`;

type SwitchProps = {
  isDarkMode: boolean;
}

const SwitchButtons = styled.ul`
  width: 208px;
  height: 64px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  background: ${(props) => props.theme.colors.ThemeButtonBox};
  border-radius: 30px;
  line-height: 50px;

  li {
    width: 98.73px;
    height: 51.2px;
    cursor: pointer;
    border-radius: 30px;
    margin-top: 6px;
  }
`;

const DefaultThemeButton = styled.li<SwitchProps>`
  ${(props) => !props.isDarkMode && css`
    background: ${props.theme.colors.currentThemeBackground};
    color: ${props.theme.colors.currentThemeText};
  `}
`;

const DarkThemeButton = styled.li<SwitchProps>`
  ${(props) => props.isDarkMode && css`
    background: ${props.theme.colors.currentThemeBackground};
    color: ${props.theme.colors.currentThemeText};
  `}
`;

export default function Header() {
  const { isDarkMode, enable, disable } = useDarkMode();

  return (
    <HeaderWrap>
      <Logo src={logo} alt="logo" />
      <Title className="header">메가테라 푸드코트 키오스크</Title>
      <Switch>
        <SwitchButtons>
          <DefaultThemeButton
            isDarkMode={isDarkMode}
            onClick={disable}
            aria-hidden="true"
          >
            밝게
          </DefaultThemeButton>
          <DarkThemeButton
            isDarkMode={isDarkMode}
            onClick={enable}
            aria-hidden="true"
          >
            어둡게

          </DarkThemeButton>
        </SwitchButtons>
      </Switch>
    </HeaderWrap>
  );
}
