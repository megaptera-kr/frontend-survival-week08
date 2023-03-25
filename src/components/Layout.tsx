import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';

const LayoutWrap = styled.div`
  width: ${(props) => props.theme.sizes.basicWidth};
  height: ${(props) => props.theme.sizes.basicHeight};
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primarytext};
  margin: 0 auto;
`;

export default function Layout() {
  return (
    <LayoutWrap>
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutWrap>
  );
}
