import styled from 'styled-components';

const MainStyle = styled.main`
  background: ${(props) => props.theme.colors.backgroundPrimary};
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export default MainStyle;
