import styled from 'styled-components';

export const Restaurants = styled.ul`
  display:flex;
  min-height:calc(100vh - 530px);
  flex-wrap:wrap;
  padding:80px 50px;
  gap:80px;
  background:${(props) => props.theme.colors.background};
`;

export const Restaurant = styled.li`
  width:100%;
  flex:1 1 100%;
  padding-top:80px;
  &:first-child{
    padding-top:0;
  }
  &:nth-child(n+2){
    border-top:1px solid #555;
  }
`;

export const StoreName = styled.h3`
  font-size:4.8rem;
  font-family: 'Pretendard Variable';
  font-weight:700;
  color:${(props) => props.theme.colors.text};
`;
