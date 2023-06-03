import { useNavigate } from 'react-router';
import styled from 'styled-components';
import useDispatch from '../../hooks/useDispatch';
import useFetchReceipt from '../../hooks/useFetchReceipt';
import useFetchReceiptID from '../../hooks/useFetchReceiptID';
import { changeID, inputReceipt, refreshCart } from '../../store/Store';

const Div = styled.div`
button{
  cursor: pointer;
  margin: 0.5rem;
  border: none;
}
.cancelButton{
  color: white;
  padding: 1rem;
  background-color: rgb(68, 39, 43);
  font-size: 2.8rem;
  width: 49%;
  border-radius: 3em;
  padding-block: 1.3em;
}
.orderButton{
  color: white;
  padding: 1rem;
  background-color: rgb(255, 132, 0);;
  font-size: 2.8rem;
  width: 49%;
  border-radius: 3em;
  padding-block: 1.3em;
}
`;

export default function OrderButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fetchReceiptID } = useFetchReceiptID();
  const { fetchReceipt } = useFetchReceipt();
  function hancleCancel() {
    navigate('/');
    dispatch(refreshCart());
  }
  async function handelOrder() {
    const { id } = await fetchReceiptID();
    const receipt = await fetchReceipt(id);
    dispatch(changeID(id));
    dispatch(inputReceipt(JSON.stringify(receipt)));
    navigate(`/order/complete?orderId=${id}`);
  }
  return (
    <Div>
      <button className="cancelButton" type="button" onClick={hancleCancel}>취소</button>
      <button className="orderButton" type="button" onClick={handelOrder}>주문하기</button>
    </Div>
  );
}
