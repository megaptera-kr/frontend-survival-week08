import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  padding:0 50px;
`;

export const SearchInput = styled.input`
  width:100%;
  padding:21px 30px;
  background:none;
  border-radius:20px;
  border:2px solid ${(props) => props.theme.colors.primary};
  box-sizing:border-box;
  font-size:3.2rem;
  font-weight:400;
  color: #fff;
  &::placeholder {
    color:${(props) => props.theme.colors.white};
  }
`;
