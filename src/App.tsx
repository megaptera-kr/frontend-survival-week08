import { Reset } from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle';

import Layout from './components/Layout';
import HomePage from './Pages/HomePage';

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
