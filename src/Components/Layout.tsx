import { Outlet } from 'react-router';

import Header from './Header/Header';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
