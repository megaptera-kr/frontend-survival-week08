import styled from 'styled-components';

export const Text = styled.span`
  position: relative;
  z-index: 2;
  flex:1 1 50%;
  text-align:center;
  font-size:2.0rem;
`;

export const Label = styled.label<{$isDarkMode : boolean}>`
  position:relative;
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:208px;
  height:64px;
  padding:6px 8px;
  font-family: 'Pretendard Variable';
  cursor:pointer;
  border-radius: 30px;
  transition:background 0.1s;
  background:${(props) => (!props.$isDarkMode ? '#FFA454' : '#3A3A3A')};
  &:after{
    content:'';
    position:absolute;
    z-index:1;
    top:50%;
    left:${(props) => (!props.$isDarkMode ? '8px' : 'calc(50% - 8px)')};
    width:50%;
    height:calc(100% - 12px);
    transform:translate(0%, -50%);
    transition:left 0.3s;
    background:#000;
    border-radius:30px;
  }
`;

export const Input = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  position:absolute;
  top:0;
  left:0;
  width:1px;
  height:1px;
  clip:rect(0, 0, 0, 0);
`;
