import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const LayoutContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  ${(props) => props.theme.colors.background && `background: ${props.theme.colors.background}`};
  ${(props) => props.theme.colors.main.text && `color: ${props.theme.colors.main.text}`};
`;

export default function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}
