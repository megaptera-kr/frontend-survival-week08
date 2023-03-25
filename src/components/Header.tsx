import styled from 'styled-components';

import { useDarkMode } from 'usehooks-ts';

import logo from '../../static/images/logo.png';

const HeaderWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 22px 20px;
`;

const Logo = styled.img`
  width: 68px;
  height: 60px;
`;

const Title = styled.span`
  width: 70%;
  height: 60px;
  font-weight: 700;
  line-height: 58px;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 0.04em;
  font-family: 'yg-jalnan';
`;

const Switch = styled(Title)`
  width: 30%;
  font-size: 20px;
  font-family: 'Pretendard-Regular';
  ul {
    display: inline-flex;
    flex-wrap: wrap;
  }
  li {
    width: 90px;
    cursor: pointer;
  }
`;

export default function Header() {
  const { enable, disable } = useDarkMode();

  return (
    <HeaderWrap>
      <Logo src={logo} alt="logo" />
      <Title className="header">메가테라 푸드코트 키오스크</Title>
      <Switch>
        <ul>
          <li onClick={disable} aria-hidden="true">밝게</li>
          <li onClick={enable} aria-hidden="true">어둡게</li>
        </ul>
      </Switch>
    </HeaderWrap>
  );
}
