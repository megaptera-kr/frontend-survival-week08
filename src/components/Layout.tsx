import { Reset } from 'styled-reset';
import { Outlet } from 'react-router';

import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Reset />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
