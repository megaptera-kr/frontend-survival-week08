import styled, { css } from 'styled-components';

import { useLocalStorage } from 'usehooks-ts';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

type ToggleButtonProps = {
  active: boolean;
}

const ToggleButton = styled.button<ToggleButtonProps>`
  padding: 1em .3em;
  border-radius: 3rem;
  color: #FFFFFF;
  background-color: #FFA454;
  cursor: pointer;

  span:first-of-type {
    padding: .7em 1.5em;
    border-radius: 3em;
    color: #000000;
    background-color: #FFFFFF;
  }

  span:last-of-type {
    padding: .7em 1.5em;
    border-radius: 30px;
  }

  ${(props) => props.active && css`
    background-color: #3A3A3A;

    span:first-of-type {
      color: #FFFFFF;
      background-color: transparent;
    }

    span:last-of-type {
      background-color: #1E1E1E;
    }
  `}
`;

export default function Switch() {
  const [isDarkMode, setThemeMode] = useLocalStorage('darkMode', false);

  const toggleTheme = () => {
    setThemeMode(!isDarkMode);
  };

  return (
    <Container>
      <ToggleButton
        type="button"
        onClick={toggleTheme}
        active={isDarkMode}
      >
        <span>밝게 </span>
        <span>어둡게 </span>
      </ToggleButton>
    </Container>
  );
}
