import styled from 'styled-components';
import SwitchBtn from './SwitchBtn';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 3rem;
`;

const StyledWrapper = styled.div`
 display: flex;
`;

const StyledLogo = styled.img`
  width: 6.8rem;
  height: 6rem;
`;

const StyledTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 5.088rem;
  letter-spacing: -3%;
  color: #fff;
`;

type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: () =>void;
}
export default function Header({ isDarkMode, toggleDarkMode }:HeaderProps) {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo src="/images/logo.png" alt="logo" />
        <StyledTitle>메가테라 푸드코트 키오스크</StyledTitle>
      </StyledWrapper>
      <SwitchBtn isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </StyledContainer>
  );
}
