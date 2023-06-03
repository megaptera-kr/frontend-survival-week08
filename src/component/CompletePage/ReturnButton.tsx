import { useNavigate } from 'react-router';
import styled from 'styled-components';
import useDispatch from '../../hooks/useDispatch';
import { refreshCart } from '../../store/Store';

const Div = styled.div`
background: ${((props) => (props.theme.colors.background))};
text-align: center;
padding-bottom: 6rem;
button{
  width: 90%;
  height: 90px;
  color: white;
  font-size: 2.8rem;
  background-color: rgb(255, 132, 0);
  border-radius: 50px;
}
`;

export default function ReturnButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleClick() {
    navigate('/');
    dispatch(refreshCart());
  }
  return (
    <Div>
      <button type="button" onClick={handleClick}>메인화면으로 돌아가기</button>
    </Div>
  );
}
