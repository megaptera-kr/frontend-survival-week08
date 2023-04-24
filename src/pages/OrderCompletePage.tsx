import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';

import Receipt from '../types/Receipt';

import OrderNumber from '../components/OrderNumber';
import OrderList from '../components/OrderList';

const ReceiptWrap = styled.div`
  width: 100%;
  height: ${(props) => props.theme.sizes.basicHeight};
  background: ${(props) => props.theme.colors.receiptBackground};
  color: ${(props) => props.theme.colors.secondarytext};
  padding: 10% 7% 21% 7%;
  border-radius: ${(props) => props.theme.sizes.bgBorderRadious};
`;

const GoToMainButtonWrap = styled.div`
  width: 100%;
  height: 100px;
  button {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 80px;
    font-weight: 500;
    font-size: 28px;
    font-family: 'Pretendard-Regular';
    cursor: pointer;
    color: ${(props) => props.theme.colors.goBackToMainButton};
    background: ${(props) => props.theme.colors.goBackToMainButtonBackground};
  }
`;

export default function OrderCompletePage() {
  const defaultReceipt = {} as Receipt;
  const [, setReceipt] = useLocalStorage('receipt', defaultReceipt);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    setReceipt(defaultReceipt);
  };

  return (
    <ReceiptWrap>
      <OrderNumber />
      <OrderList />
      <GoToMainButtonWrap>
        <button
          type="button"
          onClick={handleClick}
        >
          메인화면으로 돌아가기
        </button>
      </GoToMainButtonWrap>
    </ReceiptWrap>
  );
}
