import styled from 'styled-components';

const HorizontalLine = styled.div`
  background-color: ${(props) => props.theme.colors.bodyPrimary};
  opacity: 50%;
  width: 100%;
  height: 2px;
  margin-top: 2.6rem;
  margin-bottom: 1.6rem;
`;

export default HorizontalLine;
