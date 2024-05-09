type CartButtonProps = {
  goToIntro:() => void
  goToResult:() => void
}

function CartButton({ goToIntro, goToResult }:CartButtonProps) {
  return (
    <div>
      <button type="button" onClick={goToIntro}>취소</button>
      <button type="button" onClick={goToResult}>주문하기</button>
    </div>
  );
}

export default CartButton;
