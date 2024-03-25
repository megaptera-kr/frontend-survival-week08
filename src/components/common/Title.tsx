import styled from 'styled-components';

type TitleProps = {
  children: React.ReactNode;
};

const Title = styled.h3<TitleProps>`
  font-size: 4rem;
  user-select: none;
  color: ${(props) => props.theme.colors.headingPrimary};
  font-family: ${(props) => props.theme.font.brand};
`;

export default Title;
