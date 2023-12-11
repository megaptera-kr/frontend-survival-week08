import styled from 'styled-components';
import { useNavigate } from 'react-router';
import ItemInfo from './ItemInfo';
import useMenuStore from '../../hooks/useMenuStore';
import MenuItem from './MenuItem';
import useCreateOrder from '../../hooks/useCreateOrder';
import type Food from '../../types/Food';
import totalPrice from '../../utils/totalPrice';

type ButtonProps = {
  isCancel: boolean;
}

const CartWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.tableButton};
  box-sizing: border-box;
  padding: 40px 50px 50px 50px;

  section {
    display: flex;
    gap: 10px;
  }
`;

const MenuList = styled.ul`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 25px;
  row-gap: 25px;
`;

const Button = styled.button<ButtonProps>`
  width: 100%;
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 28px;
  font-weight: 500;
  box-sizing: border-box;
  padding: 30px 0;
  background: ${(props) => (props.isCancel ? props.theme.colors.cancel : props.theme.colors.cart)};

  :hover {
    background: ${(props) => (props.isCancel ? props.theme.colors.activeCancelBtn : props.theme.colors.activeBtn)};
  }
`;
export default function Cart() {
  const [{ menu }, store] = useMenuStore();
  const navigate = useNavigate();
  const calcTotalPrice = totalPrice(menu);
  const { createOrder } = useCreateOrder();
  const handleClickRemove = (index:number) => {
    store.removeMenu(index);
  };

  const handleClickCancel = () => {
    navigate('/');
    store.clear();
  };

  const handleClickOrder = async () => {
    if (!menu.length) return;

    const { id } = await createOrder(menu);
    store.clear();
    navigate(
      {
        pathname: '/order/complete',
        search: `?orderId=${id}`,
      },
    );
  };
  return (
    <CartWrapper>
      <ItemInfo menuCount={menu.length} calcTotalPrice={calcTotalPrice} />
      <MenuList>
        {
          menu.map((el: Food, index: number) => {
            const key = `${index}-${el.name}`;

            return (
              <div key={key}>
                <MenuItem item={el} index={index} onDelete={handleClickRemove} />
              </div>
            );
          })
        }
      </MenuList>
      <section>
        <Button isCancel onClick={handleClickCancel}>취소</Button>
        <Button isCancel={false} onClick={handleClickOrder}>주문 하기</Button>
      </section>
    </CartWrapper>
  );
}
