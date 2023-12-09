import styled from 'styled-components';

export const MainContainer = styled.div`
  width:calc(100% - 100px);
  padding:100px 50px;
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
`;

export const Desc = styled.h2`
  font-size:11rem;
  text-align: center;;
  word-break: keep-all;
`;

export const TypeList = styled.div<{$isDarkMode : boolean}>`
  display:flex;
  width:100%;
  margin-top:152px;
  justify-content: center;
  align-items: center;
  gap:40px;
  box-sizing: border-box;
  button {
    border-width: 3px;
    border-style:solid;
    border-color:transparent;
    cursor:pointer;
    transition:all 0.3s;
    &:hover{
      background-color:${(props) => (!props.$isDarkMode ? '#fff1dc' : 'none')};
      border-color:${(props) => (!props.$isDarkMode ? 'transparent' : '#ff8400')}
    }
  }
`;

export const OrderButton = styled.button`
  flex:1 1 auto;
  height:591px;
  font-size:4.8rem;
  align-items: center;
  justify-content: center;
  border-radius:40px;
`;

export const Icon = styled.i<{ $type?: string }>`
  display:block;
  width:200px;
  height:200px;
  margin:0 auto 60px;
  background-repeat: no-repeat;
  background-position:center;
  background-size:200px;
  background-image: ${(props) => (props.$type === 'store' ? "url('/images/fastfood.png')" : "url('/images/bag.png')")} ;
`;
