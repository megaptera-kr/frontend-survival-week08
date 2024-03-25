import styled from 'styled-components';

const Text = styled.span`
  color: ${(props) => props.theme.colors.bodyPrimary};
  font-family: ${(props) => props.theme.font.main};
  user-select: none;
`;

export default Text;
