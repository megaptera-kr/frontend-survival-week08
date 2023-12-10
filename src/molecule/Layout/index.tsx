import styled from 'styled-components';

import { Outlet } from 'react-router';

import Header from '../Header';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
