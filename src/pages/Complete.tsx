import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useGetReceipt from '../hooks/useGetReceipt';
import totalPrice from '../utils/totalPrice';
import type Food from '../types/Food';

const CompleteWrapper = styled.div`
  box-sizing: border-box;
  padding: 180px 50px 50px 50px;
  margin-top: 50px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 0px 80px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    margin-bottom: 32px;
  }

  hr {
    width: 100%;
    border: 2px solid ${(props) => props.theme.colors.tableBorder}
  }
`;

const CompleteTitle = styled.span`
  font-family: yg-jalnan;
  color: ${(props) => props.theme.colors.tableText};
  font-size: 80px;
  line-height: 96px;
`;

const OrderId = styled.span`
  margin-top: 16px;
  margin-bottom: 80px;
  font-size: 48px;
  font-family: Pretendard-Regular;
  color: ${(props) => props.theme.colors.orderId};
`;

const ReceiptTitle = styled.span`
  width: 100%;
  border-top: ${(props) => props.theme.colors.receiptBorder};
  box-sizing: border-box;
  padding: 32px 40px;
  font-family: Pretendard-Regular;
  font-weight: 700;
  text-align: start;
  font-size: 48px;
  color: ${(props) => props.theme.colors.tableText};
`;

const ReceiptList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  padding: 32px 40px;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;
    font-family: Pretendard-Regular;
    font-size: 32px;
    color: ${(props) => props.theme.colors.tableText}
  }

  li + li {
    margin-top: 24px;
  }
`;
const Section = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 32px 40px;
  font-family: Pretendard-Regular;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  span:first-of-type {
    color: ${(props) => props.theme.colors.tableText}
  }
   span:last-of-type {
    color: ${(props) => props.theme.colors.cart}
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  padding: 34px 0;
  font-family: Pretendard-Regular;
  font-size: 28px;
  margin-top: 310px;
  width: 100%;
  border: none;
  border-radius: 80px;
  background: ${(props) => props.theme.colors.cart};
  color: white;
  cursor: pointer;
`;

export default function Complete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const receiptContent = useGetReceipt(orderId || '');
  const calcTotalPrice = totalPrice(receiptContent.menu);

  const handleClickHome = () => {
    navigate('/');
  };
  return (
    <CompleteWrapper>
      <img src="/images/complete.png" alt="completeIcon" />
      <CompleteTitle>
        주문이
        <br />
        완료되었습니다!
      </CompleteTitle>
      <OrderId>
        주문번호
        {' '}
        {receiptContent.id}
      </OrderId>
      <ReceiptTitle>주문목록</ReceiptTitle>
      <hr />
      <ReceiptList>
        {receiptContent.menu?.map((menu: Food) => (
          <li key={menu.id}>
            <span>{menu.name}</span>
            <span>
              {menu.price.toLocaleString()}
              원
            </span>
          </li>
        ))}
      </ReceiptList>
      <hr />
      <Section>
        <span>총 가격</span>
        <span>
          {calcTotalPrice.toLocaleString()}
          원
        </span>
      </Section>
      <hr />
      <Button onClick={handleClickHome}>메인화면으로 돌아가기</Button>
    </CompleteWrapper>
  );
}
