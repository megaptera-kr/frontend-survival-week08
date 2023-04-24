import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TopNav from './TopNav';

export default function Layout() {
  const Main = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto;
    width:1080px;
    min-height:100vh;
`;

  return (
    <Main>
      <TopNav />

      <Outlet />
    </Main>
  );
}
