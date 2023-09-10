import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useCartStore from '../hooks/useCartStore';
import useOrder from '../hooks/useOrder';

const Container = styled.div`
  padding-block: 8em 3em;
  padding-inline: 3rem;
  border-top-right-radius: 8rem;
  background: rgb(255, 255, 255);
`;

const TitleBox = styled.div`
  font-size: 8rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding-block: 1em;
  border-bottom: 1px solid rgb(97, 97, 97);

  img {
    margin-bottom: 0.5em;
    width: 1.5em;
  }

  h2 {
    width: 60%;
    text-align: center;
  }

  p {
    font-size: 4.8rem;
    font-weight: normal;
    margin-top: 0.5em;
    color: rgb(106, 106, 106);
  }
`;

const ContentBox = styled.div`
  margin-bottom: 10em;

  h3 {
    font-size: 4.8rem;
    padding-block: 1em;
    border-bottom: 1px solid rgb(244, 244, 244);
  }

  ul {
    font-size: 3.2rem;
    padding-block: 1em;
    border-bottom: 1px solid rgb(244, 244, 244);

    li {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin-bottom: 1em;
    }
  }

  div.priceBox {
    font-size: 3.2rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-block: 1em;
    border-bottom: 1px solid rgb(244, 244, 244);

    span {
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      strong {
        font-size: 4.8rem;
        color: rgb(255, 132, 0);
      }
    }
  }
`;

const MainButton = styled.button`
  font-size: 2.8rem;
  display: block;
  padding-block: 1.2em;
  width: 100%;
  border: 0px;
  border-radius: 8em;
  background: rgb(255, 132, 0);
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default function OrderCompletePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  if (!orderId) {
    return (
      <div />
    );
  }
  const order = useOrder(orderId);

  const [, store] = useCartStore();

  return (
    <Container>
      <TitleBox>
        <img
          src="/images/complete.png"
          alt=""
        />
        <h2>
          주문이 완료되었습니다!
        </h2>
        <p>
          주문번호
          {order?.id}
        </p>
      </TitleBox>
      <ContentBox>
        <h3>주문목록</h3>
        <ul>
          {
            order?.menu.map((menu) => (
              <li key={menu.id}>
                <span>{menu.name}</span>
                <span>
                  {menu.price.toLocaleString()}
                  원
                </span>
              </li>
            ))
          }
        </ul>
        <div className="priceBox">
          <span>
            총가격
          </span>
          <span>
            <strong>
              {order?.totalPrice.toLocaleString()}
              원
            </strong>
          </span>
        </div>
      </ContentBox>
      <MainButton
        type="button"
        onClick={() => {
          store.resetCart();
          navigate('/');
        }}
      >
        메인화면으로 돌아가기
      </MainButton>
    </Container>
  );
}
