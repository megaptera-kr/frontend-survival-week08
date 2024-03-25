import { Link } from 'react-router-dom';

import styled from 'styled-components';

const LogoAreaStyle = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
    cursor: pointer;
  }

  img {
    width: 8rem;
    height: 8rem;
  }

  h1 {
    font-size: 4.8rem;
    font-family: 'yg-jalnan';
    color: #fff;
    padding-inline: 1.4rem;
    transform: translateY(0.4rem);
  }
`;

export default function Logo() {
  return (
    <LogoAreaStyle>
      <Link to="/" />
      <img src="/images/logo.png" alt="logo" />
      <h1>메가테라 푸드코트 키오스크</h1>
    </LogoAreaStyle>
  );
}
