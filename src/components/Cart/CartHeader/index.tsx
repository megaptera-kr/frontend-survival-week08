import Food from '../../../types/food';
import convertKRW from '../../../utils/convertKRW';
import getTotalPrice from '../../../utils/getTotalPrice';

type CartHeaderProps = {
  menu:Food[]
}

function CartHeader({ menu }:CartHeaderProps) {
  const totalPrice = getTotalPrice(menu);
  return (
    <header>
      <div>
        <img src="" alt="" />
        <span>주문내역</span>
        <span>
          {menu.length}
          개
        </span>
      </div>

      <div>
        <span>
          총 결제 예상금액
          <span>{convertKRW(totalPrice)}</span>
          원
        </span>
      </div>
    </header>
  );
}

export default CartHeader;
