import { Reset } from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <div>
        <h1>메가테라 푸드코트 키오스크</h1>
      </div>
    </>
  );
}
