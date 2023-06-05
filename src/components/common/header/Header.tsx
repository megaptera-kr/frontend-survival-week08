import styled from 'styled-components';
import staticImages from '../../../../static/staticImages';

const StyledHeaderContainer = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 0 30px;
`;

const StyledLogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 68px;
  height: 60px;
  margin-right: 26px;
`;

const StyledLogoText = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
`;

const StyledToggleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButtonToggle = styled.button.attrs({
  type: 'button',
})`
  height: 64px;
  border-radius: 3rem;
  background-color: ${(props) => props.theme.colors.background};
  font-size: 2rem;
  font-weight: 500;
  border-style: none;
  cursor: pointer;
`;

const StyledButtonToggleSpan = styled.span<{
  isActive: boolean;
}>`
  background: ${(props) => (props.isActive
    ? props.theme.palette.lightPrimary : 'transparent')};
  color: ${(props) => (props.isActive
    ? props.theme.colors.subText : props.theme.colors.text)};
  border-radius: 3rem;
  padding: 1.3rem 2rem;
`;

type HeaderProps = {
  isDarkMode: boolean;
  toggle: () => void;
}

export default function Header({
  isDarkMode, toggle,
}: HeaderProps) {
  return (
    <StyledHeaderContainer>
      <StyledLogoWrap>
        <StyledImage
          alt="logo"
          src={staticImages.logo}
        />
        <StyledLogoText>
          메가테라 푸드코트 키오스크
        </StyledLogoText>
      </StyledLogoWrap>
      <StyledToggleWrap>
        <StyledButtonToggle onClick={toggle}>
          <StyledButtonToggleSpan
            isActive={isDarkMode}
          >
            밝게
          </StyledButtonToggleSpan>
          <StyledButtonToggleSpan
            isActive={!isDarkMode}
          >
            어둡게
          </StyledButtonToggleSpan>
        </StyledButtonToggle>
      </StyledToggleWrap>
    </StyledHeaderContainer>
  );
}
