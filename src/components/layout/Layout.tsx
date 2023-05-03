import { Outlet } from 'react-router';

import Header from './header/Header';
import * as S from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header />
      <S.Main><Outlet /></S.Main>
    </>
  );
}
