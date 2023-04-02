import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  width: 1080px;
  height: 1920px;
  padding: 50px 0px 50px 0px;
`;

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
