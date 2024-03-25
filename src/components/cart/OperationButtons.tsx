import Button from '../common/Button';

type OperationButtons = {
  onClickCancel: () => void;
  onClickOrder: () => void;
};

export default function OperationButtons({
  onClickCancel,
  onClickOrder,
}: OperationButtons) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Button text="취소" active="secondary" onClick={onClickCancel} />
      <Button text="주문하기" active="primary" onClick={onClickOrder} />
    </div>
  );
}
