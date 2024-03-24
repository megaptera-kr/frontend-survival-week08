import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 4rem;
  padding-block: 3.4rem;



  span {
    font-size: 3.2rem;
    line-height: 38.4px;
    font-weight: bold;
  }

  span:last-of-type {
    font-size: 4.8rem;
    line-height: 57.28px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default function OrderTotalPrice({ totalPrice } : {totalPrice: number}) {
  return (
    <Container>
      <span>
        총가격
      </span>
      <span>
        {totalPrice.toLocaleString()}
        원
      </span>
    </Container>
  );
}
