import styled from 'styled-components';

type HeadingProps = {
  children: React.ReactNode;
};

const Heading = styled.h1<HeadingProps>`
  font-size: 8rem;
  font-family: ${(props) => props.theme.font.brand};
  color: ${(props) => props.theme.colors.headingPrimary};
  text-align: center;
  user-select: none;
`;

export default Heading;
