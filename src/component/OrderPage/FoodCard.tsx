import styled from 'styled-components';
import useDispatch from '../../hooks/useDispatch';
import { deleteCart } from '../../store/Store';
import Food from '../../type/Food';

type FoodCardProps={
  menu:Food,
  index:number
}

const Div = styled.div`
display: inline-block;
margin: 1rem 2rem;
background-color: ${((props) => (props.theme.colors.buttonBackground))};
border-radius: 25px;
width: 300px;
height: 200px;
padding: 3rem;
.flexDiv{
  display: flex;
  justify-content: space-between;
}
span{
  color: black;
}
.foodName{
  font-size: 2.8rem;
  color: ${((props) => (props.theme.colors.font))};
  display: block;
  padding-block: 1em;
}
.foodPrice{
  color: rgb(255, 132, 0);
  font-size: 2.8rem;
  display: block;
  padding-block: 1em;
}
div{
  button{
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
}
`;

export default function FoodCard({ menu, index }:FoodCardProps) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(deleteCart(String(index)));
  }
  return (
    <Div>
      <div className="flexDiv">
        <div>
          <span className="foodName">{menu.name}</span>
          <span className="foodPrice">
            {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </span>
        </div>
        <div>
          <button type="button" onClick={handleClick}>X</button>
        </div>
      </div>
    </Div>
  );
}
