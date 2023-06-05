import styled from 'styled-components';
import useDispatch from '../../hooks/useDispatch';
import { addCart } from '../../store/Store';
import Food from '../../type/Food';

type MenuProps = {
  menu : Food
}

const Button = styled.button.attrs({
  type: 'button',
})`
margin: 1rem;
width: 300px;
height: 350px;
border-radius: 20px;
border: 1px solid ${((props) => (props.theme.colors.buttondBackground2))};
color: ${((props) => (props.theme.colors.font))};
background-color: ${((props) => (props.theme.colors.buttondBackground2))};
&:hover{
  border : 1px solid rgb(248, 158, 33)
}
  img{
    width: 75%;
  }
  span{
    display : block;
    font-size: 3.2rem;
    text-align: left;
    padding: 0rem 1rem;
  }
`;

export default function Menu({ menu }:MenuProps) {
  const dispatch = useDispatch();
  const stringMenu = JSON.stringify(menu);
  return (
    <Button onClick={() => { dispatch(addCart(stringMenu)); }}>
      <img src={menu.image} alt="음식사진" />
      <span>{menu.name}</span>
      <span>
        {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원
      </span>
    </Button>
  );
}
