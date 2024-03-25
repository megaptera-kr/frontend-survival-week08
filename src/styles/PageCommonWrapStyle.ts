import styled from 'styled-components';

const PageCommonWrapStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(192rem - 16rem);
  padding:5rem;
  border-radius: 0 8rem 0 0;
  background-color: ${(props) => props.theme.items.itemWrapBg};
`;

export default PageCommonWrapStyle;
