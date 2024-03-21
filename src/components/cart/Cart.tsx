import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #f4f4f4;
  /* margin-top: 3.2rem; */
`;

type CartProps = {
  orderType: string;
};

export default function Cart({ orderType }: CartProps) {
  return (
    <Wrapper>
      <div>[{orderType}]</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
      <div>aslkf</div>
    </Wrapper>
  );
}
