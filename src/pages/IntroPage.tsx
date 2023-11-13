import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
   padding-block: 28rem;
   padding-inline: 5rem;
 `;

const Notice = styled.h2`
   font-size: 11rem;
   font-weight: 700;
   color: ${(props) => props.theme.colors.secondary};
   margin-bottom: 15.2rem;
   text-align: center;
 `;

const ButtonBox = styled.div`
   display: flex;
   gap: 4rem;
   justify-content: center;
   button {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 47rem;
     height: 59.1rem;
     font-family: 'Cafe24Supermagic-Bold-v1.0';
     font-size: 4.8rem;
     font-weight: 700;
     background: ${(props) => props.theme.colors.background};
     border-radius: 4rem;
     color: ${(props) => props.theme.colors.text};
     border: 0;
   }
   button:hover {
     background: ${(props) => props.theme.colors.buttonHoverBackground};
     border: 3px solid ${(props) => props.theme.colors.buttonHoverBorder};
   }
   img {
     width: 20rem;
     height: 20rem;
     margin-bottom: 6rem;
   }
 `;

export default function IntroPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order');
  };
  return (
    <Container>
      <Notice>원하시는 주문을 터치해주세요</Notice>
      <ButtonBox>
        <button
          type="button"
          onClick={handleClick}
        >
          <img src="/images/fastfood.png" alt="fastfood" />
          매장 주문
        </button>
        <button
          type="button"
          onClick={handleClick}
        >
          <img src="/images/bag.png" alt="fastfood" />
          전체 포장
        </button>
      </ButtonBox>
    </Container>
  );
}
