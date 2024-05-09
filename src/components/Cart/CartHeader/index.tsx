import Food from '../../../types/food';
import getTotalPrice from '../../../utils/getTotalPrice';

type CartHeaderProps = {
  menu:Food[]
}

function CartHeader({ menu }:CartHeaderProps) {
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
          <span>{getTotalPrice(menu)}</span>
          원
        </span>
      </div>
    </header>
  );
}

export default CartHeader;
