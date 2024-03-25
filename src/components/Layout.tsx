import styled from 'styled-components';

import { Outlet } from 'react-router-dom';

import Header from './Header';

type MainLayoutProps = {
  active?: boolean;
}

const MainLayout = styled.div<MainLayoutProps>`
  margin-inline: auto;
  width: 1080px;
  background: ${(props) => (props.theme.colors.layoutBackground)};
`;

export default function Layout() {
  return (
    <MainLayout>
      <Header />
      <main>
        <Outlet />
      </main>
    </MainLayout>
  );
}
