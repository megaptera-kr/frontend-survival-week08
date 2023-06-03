import styled from 'styled-components';
import useStore from '../../hooks/useStore';
import Food from '../../type/Food';
import MenuList from './MenuList';

const Div = styled.div`
  padding: 8em 3em;
  background: ${((props) => (props.theme.colors.background))};
  text-align: center;
  img{
    width: 120px;
  }
  h1{
    color: ${((props) => (props.theme.colors.font))};;
    font-size: 8rem;
    font-weight: bold;
    margin-top: 2rem;
    width: 60%;
    margin: auto;
    margin-top: 3rem;
  }
  p{
    color: #717171;
    font-size: 4rem;
    margin-top: 2rem;
    padding-bottom: 5rem;
    border-bottom: 1px solid #222;
  }
  h4{
    margin-top: 5rem;
    color: ${((props) => (props.theme.colors.font))};;
    font-size: 4.8rem;
    text-align: left;
    padding-bottom: 5rem;
  }
  .totalPrice{
    border-top: 0.5px solid #222;
    border-bottom: 0.5px solid #222;
    padding: 4rem 0rem;
    color: ${((props) => (props.theme.colors.font))};;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .totalKey{
      font-size: 3.8rem;
    }
    .totalValue{
      font-size: 4.8rem;
      color: rgb(255, 132, 0);
    }
  }
  .menuContainer{
    border-top: 0.5px solid #222;
    border-bottom: 0.5px solid #222;
    padding: 4rem 0rem;
    color: black;
  }
`;

export default function ReceiptDetail() {
  const store = useStore();
  const { order } = JSON.parse(store.state.Receipt);
  return (
    <Div>
      <img src="/images/complete.png" alt="" />
      <h1>
        주문이 완료되었습니다!
      </h1>
      <p>
        주문번호
        {order.id}
      </p>
      <h4>주문목록</h4>
      <div className="menuContainer">
        {
          (order.menu).map((menu:Food, index:number) => {
            const key = `${menu.id}-${index}`;
            return (
              <MenuList menu={menu} key={key} />
            );
          })
        }
      </div>
      <div className="totalPrice">
        <span className="totalKey">
          총가격
        </span>
        <span className="totalValue">
          {order.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </span>
      </div>
    </Div>
  );
}
