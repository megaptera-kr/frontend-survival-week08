import * as Styles from './styles';

interface CheckBoxInterface {
  isDarkMode : boolean
  trueText : string
  falseText : string
  handleToggleTheme : () => void
}

function Checkbox({
  isDarkMode, trueText, falseText, handleToggleTheme,
} : CheckBoxInterface) {
  const onChange = () => {
    handleToggleTheme();
  };

  return (
    <Styles.Label $isDarkMode={isDarkMode}>
      <Styles.Input onChange={onChange} />
      <Styles.Text>{falseText}</Styles.Text>
      <Styles.Text>{trueText}</Styles.Text>
    </Styles.Label>
  );
}
export default Checkbox;
