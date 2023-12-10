import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  margin-top:30px;
  padding:0 30px;
`;

export const SearchInput = styled.input`
  width:100%;
  padding:21px 100px 21px 30px;
  background:none;
  border-radius:20px;
  border:2px solid ${(props) => props.theme.colors.primary};
  box-sizing:border-box;
  font-size:3.2rem;
  font-weight:400;
  color: #fff;
  background:url('/images/icon-search.png') no-repeat 95% center / 40px;
  &::placeholder {
    font-family: 'Pretendard Variable';
    color:${(props) => props.theme.colors.white};
  }
`;
