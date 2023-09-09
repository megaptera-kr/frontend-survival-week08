import calcTotalPrice from '../../utils/calcTotalPrice';

import { Menu } from '../../types/restaurants';

type SummaryProps = {
  cartMenu: Menu[]
}

export default function Summary({ cartMenu }: SummaryProps) {
  const totalPrice = calcTotalPrice(cartMenu);

  return (
    <div>
      <div>
        <span>주문내역</span>
        <span>{`${cartMenu.length}개`}</span>
      </div>
      <div>
        총 결제 예상금액
        <strong>{totalPrice.toLocaleString()}</strong>
        원
      </div>
    </div>
  );
}
