import styled from 'styled-components';

export const Menues = styled.ul`
  display:flex;
  width:100%;
  gap:25px;
  margin-top:20px;
  overflow-x:overlay;
`;

export const Menu = styled.li`
`;

export const MenuButton = styled.button`
  padding:40px 30px;
  text-align:left;
  font-family: 'Pretendard Variable';
  font-size:3.2rem;
  font-weight:600;
  letter-spacing: -0.96px;
  border-radius:40px;
  border:3px solid transparent;
  background:${(props) => props.theme.colors.boxColor};
  color:${(props) => props.theme.colors.text};
  transition: all 0.3s;
  &:hover{
    border-color:#ff8400;
  }
`;

export const MenuImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: '',
}))`
  display:block;
  width:200px;
  height:200px;
  margin:0 auto;
`;

export const MenuInfo = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:10px;
`;

export const MenuText = styled.p`
  flex:1 1 100%;
`;
