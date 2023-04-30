import React, { useContext } from 'react';
import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import { Switch } from '../Switch';
import { StyleContext } from '../../context/StyleProvider';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 3rem 3rem 3rem;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 6.8rem;
  margin-right: 2.6rem;
`;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export default function Header() {
  const { toggle } = useContext(StyleContext);

  return (
    <StyledContainer>
      <StyledLogoWrapper>
        <StyledLogo src="/images/logo.png" alt="logo" />
        <StyledTitle>
          메가테라 푸드코드 키오스크
        </StyledTitle>
      </StyledLogoWrapper>
      <Switch labels={['밝게', '어둡게']} onClick={toggle} />
    </StyledContainer>
  );
}
