import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { StyleProvider } from '../context/StyleProvider';
import { Header } from '../components';

const StyledContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.background};
`;

function Layout() {
  return (
    <StyleProvider>
      <StyledContainer>
        <Header />
        <Outlet />
      </StyledContainer>
    </StyleProvider>
  );
}

export default Layout;
