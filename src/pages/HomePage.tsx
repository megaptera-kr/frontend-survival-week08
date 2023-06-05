import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Div = styled.div`
text-align: center;
margin-top: 20rem;
  h2{
    font-size : 11rem;
    font-weight: bold;
    width: 65%;
    margin: auto;
    margin-bottom: 8rem;
  }
  button{
    width : 500px;
    height : 500px;
    cursor: pointer;
    border-radius: 30px;
    margin : 1rem;
    color: ${(props) => (props.theme.colors.font)};
    background-color: ${(props) => (props.theme.colors.buttonBackground)};

    img{
      width : 200px;
      height : 200px;
    }
    span{
      display: block;
      font-size: 4.8rem;
      font-weight: bold;
      margin-top : 3rem;
    }
  }
`;

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Div>
      <h2>
        원하시는 주문을 터치해주세요
      </h2>
      <div>
        <button className="orderButton" type="button" onClick={() => { navigate('/order'); }}>
          <img src="/images/fastfood.png" alt="매장주문" />
          <span>매장 주문</span>
        </button>
        <button className="orderButton" type="button" onClick={() => { navigate('/order'); }}>
          <img src="/images/bag.png" alt="전체주문" />
          <span>전체 포장</span>
        </button>
      </div>
    </Div>
  );
}
