import styled from 'styled-components';

const Section = styled.section`
  color: ${(props) => props.theme.colors.tableText};
  font-family: Pretendard-Regular;
  font-size: 32px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .totalPrice {
    color: ${(props) => props.theme.colors.cart}
  }
`;

const Span = styled.span`
  margin-left: 6px;
  box-sizing: border-box;
  padding: 6px 16px;
  background: ${(props) => props.theme.colors.cart};
  font-size: 24px;
  color: white;
  border-radius: 30px;
`;

type ItemInfoType = {
  menuCount: number;
  calcTotalPrice: number;
}
export default function ItemInfo(
  { menuCount, calcTotalPrice = 0 }: ItemInfoType,
) {
  return (
    <Section>
      <div>
        <img src="images/shopping-cart.png" alt="cartImage" />
        주문내역
        <Span>
          {menuCount}
          개
        </Span>
      </div>
      <div>
        총 결제 예상금액 &nbsp;
        <span className="totalPrice">
          {calcTotalPrice.toLocaleString()}
        </span>
        원
      </div>
    </Section>
  );
}
