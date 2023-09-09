import { Outlet } from 'react-router';
import styled from 'styled-components';

import Header from './Header';

const Container = styled.div`
  background: ${(props) => props.theme.colors.container};
  width: 1080px;
  margin: 0 auto;
`;

export default function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
