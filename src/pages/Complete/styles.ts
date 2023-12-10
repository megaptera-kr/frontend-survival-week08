import styled from 'styled-components';

export const CompleteWrapper = styled.div`
  min-height:calc(100vh - 410px);
  margin-top:50px;
  padding:180px 30px 50px;
  background:${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
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
  border-bottom:1px solid #000;
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
  letter-spacing:-1.44px;
  color:#6a6a6a;
`;

export const OrderListWrapper = styled.div`
`;

export const OrderListTitle = styled.h3`
  padding:34px 40px 32px;
  font-size:4.8rem;
  letter-spacing:-1.44px;
  border-bottom:1px solid #F4F4F4;
`;

export const OrderList = styled.ul`
  padding:32px 40px;
  font-size:3.2rem;
  letter-spacing:-0.96px;
`;

export const OrderItem = styled.li`
  display:flex;
  justify-content:space-between;
`;

export const OrderInfo = styled.span`
`;

export const TotalInfomation = styled(OrderItem)`
  padding:32px 32px 34px;
  border:1px solid #F4F4F4;
  border-left:none;
  border-right:none;
`;

export const TotalPrice = styled.span`
`;

export const MainButton = styled.button.attrs({
  type: 'button',
})``;
