type CartButtonsProps = {
  onClickCancel: () => void;
  onClickOrder: () => void;
}

export default function CartButtons(
  { onClickCancel, onClickOrder }: CartButtonsProps,
) {
  return (
    <ul>
      <li><button type="button" onClick={onClickCancel}>취소</button></li>
      <li><button type="button" onClick={onClickOrder}>주문하기</button></li>
    </ul>
  );
}
