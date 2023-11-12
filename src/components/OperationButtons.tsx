import styled from 'styled-components';

const Container = styled.div`
   margin-top: 4rem;
   display: flex;
   justify-content: center;
   width: 100%;
   gap: 1rem;
   button {
     width: 50%;
     height: 10rem;
     border: 0;
     border-radius: 5rem;
     color: ${(props) => props.theme.colors.secondary};
     font-size: 4.8rem;
   }
   button:first-child {
     background: #44272b;
   }
   button:first-child:hover {
     background: #170A0C;
   }
   button:nth-child(2) {
     background: #FF8400;
   }
   button:nth-child(2):hover {
     background: #D87000;
   }
 `;

 type OperationButtonsProps = {
   onClickCancel: () => void;
   onClickOrder: () => void;
 }

export default function OperationButtons({
  onClickCancel, onClickOrder,
}: OperationButtonsProps) {
  return (
    <Container>
      <button
        type="button"
        onClick={onClickCancel}
      >
        취소
      </button>
      <button
        type="button"
        onClick={onClickOrder}
      >
        주문하기
      </button>
    </Container>
  );
}
