import Checkbox from '../CheckBox/CheckBox';
import * as Styles from './styles';

interface HeaderInterface {
  isDarkMode : boolean
  handleToggleTheme : () => void
}

function Header({ isDarkMode, handleToggleTheme } : HeaderInterface) {
  return (
    <Styles.Header>
      <Styles.Title>메가테라 푸드코트</Styles.Title>
      <Checkbox trueText="어둡게" falseText="밝게" isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
    </Styles.Header>
  );
}

export default Header;
