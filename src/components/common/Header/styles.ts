/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Header = styled.header`
  display:flex;
  padding:0 30px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size:4.8rem;
  &:before{
    content:'';
    display:inline-block;
    width:80px;
    height:80px;
    margin-right:20px;
    vertical-align: middle;
    background:url('/images/logo.png') no-repeat center / contain;
  }
`;
