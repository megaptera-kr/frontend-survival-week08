import styled from 'styled-components';
import calcTotalPrice from '../../utils/calcTotalPrice';
import extractCartItem from '../../utils/extractCartItem';

const Div = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 3rem;
div{
  img{
    width: 3.8rem;
  }
  span{
    font-size: 2.8rem;
    color: ${((props) => (props.theme.colors.font))}
  }
  .orderLength{
    padding: 5px 15px;
    margin: 0px 10px;
    border-radius: 100px;
    color: white;
    background-color: ${((props) => (props.theme.colors.primary))};
  }
  .priceForAll{
    color: rgb(248, 158, 33);
  }
}
div{
  span{
    span{
      color: ${((props) => (props.theme.colors.primary))}
    }
  }
}
`;

export default function ReceiptList() {
  const selectedItems = extractCartItem();
  const totalPrice = calcTotalPrice();
  return (
    <Div>
      <div>
        <img src="/images/shopping-cart.png" alt="" />
        <span>주문내역</span>
        <span className="orderLength">
          {selectedItems.length}
          개
        </span>
      </div>
      <div>
        <span>
          {'총 결제 예상금액 '}
          <span className="priceForAll">
            {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
          원
        </span>
      </div>
    </Div>
  );
}
