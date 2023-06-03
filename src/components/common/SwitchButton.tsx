import styled from 'styled-components';
import ButtonText from './ButtonText';

const SwitchButtonContainer = styled.button.attrs({
  type: 'button',
})`
  width: 20.8rem;
  height: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.main.secondary};
  border-radius: 3rem;
  padding-inline: 0.3rem;
  border: 0;
  cursor: pointer;
`;

type Props = {
  isDarkMode: boolean;
  toggle: () => void;
}

export default function SwitchButton({ isDarkMode, toggle }:Props) {
  return (
    <SwitchButtonContainer
      data-testid="switch-button"
      onClick={toggle}
    >
      <ButtonText name="밝게" isActive={!isDarkMode} />
      <ButtonText name="어둡게" isActive={isDarkMode} />
    </SwitchButtonContainer>
  );
}
