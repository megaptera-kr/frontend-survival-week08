import React from 'react';
import styled from 'styled-components';
import useDispatch from '../../hooks/useDispatch';
import useStore from '../../hooks/useStore';
import { changeText } from '../../store/Store';

const Div = styled.div`
text-align: center;
  input{
    background-color:rgba( 255, 255, 255, 0 );
    background: url(./images/icon-search.png) 98% 50% / 4rem no-repeat;
    width : 1000px;
    padding : 2rem;
    border-radius : 10px;
    border : 1px solid ${(props) => (props.theme.colors.border)};
    font-size : 2rem;
    color : ${(props) => (props.theme.colors.background)};
  }
  input::placeholder{
    color : #fff;
  }
`;

export default function TextField() {
  const store = useStore();
  const dispatch = useDispatch();
  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeText(e.target.value));
  }
  return (
    <Div>
      <label>
        <input type="text" name="검색" placeholder="식당 이름을 입력해주세요" onChange={handleChange} value={store.state.inputText} />
      </label>
    </Div>
  );
}
