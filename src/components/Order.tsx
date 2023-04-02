import styled from 'styled-components';
import OrderComplete from './OrderComplete';
import useFetchOrder from '../hooks/useFetchOrder';

type OrderProps = {
  orderId : string;
  onClickBack: () => void;
}

const Container = styled.div`
  padding-block: 8em 3em;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  border-top-right-radius: ${(props) => props.theme.sizes.contentBorderRadius};
  background: ${(props) => props.theme.colors.secondary};
  text-align: center;
  margin: 0 40px;
`;

const MainButton = styled.button`
  border:0;
  color:#fff;
  background: #ff8400;
  width:100%;
  padding:30px;
  border-radius: 30px;
  font-size:2rem;
  cursor: pointer;
`;

export default function Order({ orderId, onClickBack } : OrderProps) {
  const order = useFetchOrder({ orderId });

  return (
    <Container>
      <OrderComplete order={order} />
      <MainButton type="button" onClick={onClickBack}>
        메인화면으로 돌아가기
      </MainButton>
    </Container>
  );
}
