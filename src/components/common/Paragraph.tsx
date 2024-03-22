import styled from 'styled-components';

const Paragraph = styled.p`
  background-color: ${(props) => props.theme.colors.subBackground};
  color: ${(props) => props.theme.colors.bodyParagraph};
  font-size: 4.2rem;
  text-align: center;
  font-style: italic;
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
`;

export default Paragraph;
