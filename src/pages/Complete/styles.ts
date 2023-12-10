import styled from 'styled-components';

export const CompleteWrapper = styled.div`
  min-height:calc(100vh - 410px);
  margin-top:50px;
  padding:180px 30px 50px;
  background:${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0px 80px 0px 0px;
  &:before {
    content:'';
    display:block;
    width:120px;
    height:120px;
    margin:0 auto;
    background:url('/images/complete.png') no-repeat center / contain;
  }
`;

export const TitleWrapper = styled.div`
  padding-bottom:80px;
  text-align:center;
  border-bottom:${(props) => `1px solid ${props.theme.colors.borderColor}`};
`;

export const CompleteTitle = styled.h2`
  width:570px;
  margin:32px auto 0;
  word-break:keep-all;
  font-size:8.0rem;
  line-height:96px;
  letter-spacing:-2.4px;
`;

export const OrderNumber = styled.p`
  margin-top:16px;
  font-size:4.8rem;
  font-family: 'Pretendard Variable';
  letter-spacing:-1.44px;
  color:#6a6a6a;
`;

export const OrderListWrapper = styled.div`
  font-family: 'Pretendard Variable';
`;

export const OrderListTitle = styled.h3`
  padding:34px 40px 32px;
  font-size:4.8rem;
  letter-spacing:-1.44px;
  border-top:1px solid ${(props) => props.theme.colors.borderColor};
  border-bottom:1px solid ${(props) => props.theme.colors.orderBorderColor};
  font-weight: 700;
`;

export const OrderList = styled.ul`
  padding:32px 40px;
  font-size:3.2rem;
  letter-spacing:-0.96px;
`;

export const OrderItem = styled.li`
  display:flex;
  justify-content:space-between;
  align-items: center;;
  &:nth-child(n+2){
    margin-top:26px;;
  }
`;

export const OrderInfo = styled.span`
`;

export const TotalInfomation = styled(OrderItem)`
  padding:32px 40px;
  border:1px solid ${(props) => props.theme.colors.orderBorderColor};
  border-left:none;
  border-right:none;
  &:nth-child(n+2) {
    margin-top:0;
  }
`;

export const TotalText = styled.span`
  font-size:3.2rem;
  font-weight: 700;
`;

export const TotalPrice = styled(TotalText)`
  font-size:4.8rem;
  color:#FF8400;
`;

export const MainButton = styled.button.attrs({
  type: 'button',
})`
  width:100%;
  height:100px;
  margin:310px auto 0;
  font-size:2.8rem;
  font-weight:500;
  border-radius:50px;
  font-family: 'Pretendard Variable';
  background:#FF8400;
  color:#fff;
  &:hover{
    background:'#D87000'
  }
`;
