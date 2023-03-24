import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <nav>

      <p>메가테라 푸드코트 키오스크</p>
      <p>주야간모드버튼</p>

      <main>
        <Outlet />
      </main>
    </nav>
  );
}
