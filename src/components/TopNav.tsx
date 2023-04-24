import styled from 'styled-components';
import DayNightBtn from './DayNightBtn';

const H1 = styled.h1`
        padding:7px 0 0 5px;
        font-family: 'Jalnan OTF';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 51px;
        letter-spacing: -0.03em;
    `;

const Nav = styled.nav`
        display:flex;
        margin-top:100px;
        .button {
            margin-left:auto
        }
    `;

export default function TopNav() {
  return (
    <Nav>
      <img src="/images/logo.png" width={68} height={55} alt="logo" />

      <H1 className="main-text">메가테라 푸드코트 키오스크</H1>

      <DayNightBtn />
    </Nav>
  );
}
