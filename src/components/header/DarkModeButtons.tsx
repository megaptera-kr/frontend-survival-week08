import styled from 'styled-components';

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: ${(props) => props.theme.colors.toggleBackground};
  border-radius: 30px;
  border: 0px;
  padding: 1em 0.3em;
`;

const ButtonLetter = styled.span`
  padding: 0.7em 1.5em;
  border-radius: 30px;
  font-family: 'Pretendard-Regular';
`;

const DefaultButton = styled(ButtonLetter)`
  background: ${(props) => props.theme.colors.toggleLight};
  color: ${(props) => props.theme.colors.toggleTextActive};
`;

const DarkButton = styled(ButtonLetter)`
  background: ${(props) => props.theme.colors.toggleDark};
  color: ${(props) => props.theme.colors.toggleTextNotActive};
`;

function DarkModeButtons({ toggleDarkMode } : {toggleDarkMode: () => void}) {
  return (
    <Controls>
      <Button type="button" onClick={toggleDarkMode}>
        <DefaultButton>밝게</DefaultButton>
        <DarkButton>어둡게</DarkButton>
      </Button>
    </Controls>
  );
}

export default DarkModeButtons;
