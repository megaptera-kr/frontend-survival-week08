import styled from 'styled-components';

export const CartWrapper = styled.div`
  width:100%;
  padding:40px 50px 50px;
  position:sticky;
  bottom:0;
  left:0;
  background:${(props) => props.theme.colors.boxColor};
  box-sizing:border-box;
  font-family:'Pretendard Variable';
`;

export const CartTitleBox = styled.div`
  display:flex;
  justify-content:space-between;
  padding-left:50px;
  background:url('/images/shopping-cart.png') no-repeat left center / 40px;
`;

export const LengthWrap = styled.div`
  display:flex;
  gap:16px;
  justify-content:center;
  align-items:center;
`;

export const CartTitle = styled.h3`
  font-size:3.2rem;
  font-weight:600;
  line-height:-0.96px;
  color:${(props) => props.theme.colors.text};
`;

export const CartLength = styled.span`
  padding:6px 16px;
  border-radius:30px;
  background:#ff8400;
`;

export const CartPrice = styled.p`
  font-size:3.2rem;
  font-weight:700;
  letter-spacing:-0.96px;
  color:${(props) => props.theme.colors.text};
`;

export const Price = styled.span`
  color:#ff8400;
`;

export const CartInfo = styled.span`
`;

export const CartMenues = styled.ul`
  display:flex;
  margin:40px 0;
  flex-wrap:wrap;
  gap:25px;
`;

export const CartMenu = styled.li`
  position:relative;
  flex: 0 1 calc((100% / 3) - 77px);
  padding: 30px;
  border-radius:20px;
  background:${(props) => props.theme.colors.background};
`;

export const CartMenuTitle = styled.p`
  font-size:2.8rem;
  font-weight : 500;
  leter-spacing:-0.84px;
  color:${(props) => props.theme.colors.text};
`;

export const CartMenuPrice = styled(CartMenuTitle)`
  margin-top:30px;
  color:#ff8400;
`;

export const CartMenuDeleteButton = styled.button.attrs({
  type: 'button',
})`
  width:24px;
  height:24px;
  position:absolute;
  top:30px;
  right:30px;
  background:url('/images/icon-clear.svg') no-repeat center / contain;
`;

export const CartFooter = styled.ul`
  display:flex;
  gap:10px;
`;

export const CartFooterItem = styled.li`
  flex : 1 1 50%;
`;

export const CartFooterButton = styled.button.attrs({
  type: 'button',
})<{$isType ?: string}>`
  width:100%;
  height:80px;
  border-radius:50px;
  font-size:3.2rem;
  font-weight:700;
  background:${(props) => (props.$isType === 'cancel' ? '#44272B' : '#FF8400')};
  color:#fff;
`;
