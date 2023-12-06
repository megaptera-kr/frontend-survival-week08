import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 1080px;
  padding: 50px 30px;
  min-height: 1920px;
  background: ${(props) => props.theme.colors.layoutBackground};
`;

export default function Layout() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}
