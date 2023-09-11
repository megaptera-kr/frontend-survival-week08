import styled from 'styled-components';

const CartButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    width: 49%;
    padding-block: 1.3em;
    border: none;
    border-radius: 3em;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.text};
  }

  & button:first-of-type {
    background-color: ${({ theme }) => theme.colors.cartCancelButtonBg};
  }

  & button:first-of-type:hover {
    background-color: ${({ theme }) => theme.colors.cartCancelButtonBgHover};
  }

  & button:last-of-type {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & button:last-of-type:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

type CartButtonsProps = {
  onClickCancel: () => void;
  onClickOrder: () => void;
}

export default function CartButtons(
  { onClickCancel, onClickOrder }: CartButtonsProps,
) {
  return (
    <CartButtonsWrap>
      <button type="button" onClick={onClickCancel}>취소</button>
      <button type="button" onClick={onClickOrder}>주문하기</button>
    </CartButtonsWrap>
  );
}
