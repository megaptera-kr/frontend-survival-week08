import styled from 'styled-components';
import useDispatch from '../../hooks/useDispatch';
import useStore from '../../hooks/useStore';
import { changeCategory } from '../../store/Store';

type ButtonFieldProps = {
  category : string
}

type Input = {
  colorProps : boolean;
}

const Button = styled.button.attrs({
  type: 'button',
})<Input>`
    width : 255px;
    height : 60px;
    border : none;
    margin-top: 2rem;
    background : ${((props) => (props.colorProps === true ? (props.theme.colors.buttonBackground) : 'none'))};
    color : ${((props) => (props.colorProps === true ? 'rgb(248, 158, 33)' : 'white'))};
    border-radius: 20px 20px 0px 0px;
    font-size: 3.2rem;
`;

export default function ButtonField({ category }:ButtonFieldProps) {
  const dispatch = useDispatch();
  const store = useStore();
  const booleanValue = (store.state.inputCagegory === category);
  return (
    <Button colorProps={booleanValue} onClick={() => { dispatch(changeCategory(category)); }}>
      {category}
    </Button>
  );
}
