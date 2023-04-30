import styled from 'styled-components';

const LogoDiv = styled.div`
  display: flex;
`;

const LogoImg = styled.img`
  width: 68px;
  height: 60px;
`;

const Title = styled.h1`
  color: #FFFFFF;
  font-family: 'yg-jalnan';
  font-style: normal;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 150%;
  padding-left: 14.4px;
`;

function Logo() {
  return (
    <LogoDiv>
      <LogoImg src="images/logo.png" alt="logo" />
      <Title>메가테라 푸드코트 키오스크</Title>
    </LogoDiv>
  );
}

export default Logo;
