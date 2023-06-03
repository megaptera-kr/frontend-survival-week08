import styled from 'styled-components';
import extractCartItem from '../../utils/extractCartItem';
import FoodCard from './FoodCard';

import OrderButton from './OrderButton';
import ReceiptList from './ReceiptList';

const Div = styled.div`
  background-color: ${((props) => (props.theme.colors.buttondBackground2))};
  padding: 3rem;
`;

export default function Cart() {
  const selectedMenu = extractCartItem();
  return (
    <Div>
      <ReceiptList />
      {
        selectedMenu.map((menu, index) => {
          const key = `${menu.id}-${index}`;
          return (
            <FoodCard index={index} key={key} menu={menu} />
          );
        })
      }
      <OrderButton />
    </Div>
  );
}
