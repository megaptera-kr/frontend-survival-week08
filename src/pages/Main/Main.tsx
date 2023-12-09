import { useNavigate } from 'react-router';
import * as Styles from './styles';
import useThemeStore from '../../hooks/useThmeStore';

function Main() {
  const navigate = useNavigate();
  const [{ isDarkMode }] = useThemeStore();
  return (
    <Styles.MainContainer>
      <Styles.Desc>원하시는 주문을 터치해주세요</Styles.Desc>
      <Styles.TypeList $isDarkMode={isDarkMode}>
        <Styles.OrderButton onClick={() => { navigate('/order'); }}>
          <Styles.Icon $type="store" />
          매장 주문
        </Styles.OrderButton>
        <Styles.OrderButton onClick={() => { navigate('/order'); }}>
          <Styles.Icon />
          전체 포장
        </Styles.OrderButton>
      </Styles.TypeList>
    </Styles.MainContainer>
  );
}

export default Main;
