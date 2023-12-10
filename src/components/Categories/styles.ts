import styled from 'styled-components';

export const Categories = styled.ul`
  display:flex;
  gap:33px;
  margin-top:40px;
  padding:0 30px;
`;

export const Category = styled.li`
  flex: 1 1 auto;
`;

export const CategoryButton = styled.button<{$isActive : boolean}>`
  width:100%;
  height:100%;
  padding:21px 0 ;
  border-radius:20px 20px 0 0;
  font-size:4.0rem;
  font-family: 'Pretendard Variable';
  transition: all 0.3s;
  color:${(props) => (props.$isActive ? '#ff8400' : '#fff')};
  background:${(props) => (props.$isActive ? props.theme.colors.background : 'none')};
`;
