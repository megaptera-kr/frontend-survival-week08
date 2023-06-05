import styled from 'styled-components';

type Style = {
  width: string;
  height: string;
}
const Image = styled.img<Style>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default Image;
