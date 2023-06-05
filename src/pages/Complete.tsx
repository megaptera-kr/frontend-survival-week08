import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import useFetchReceipt from '../hooks/useFetchReceipt';
import { Food } from '../types/restaurant';
import Button from '../components/common/button/Button';
import useCartStore from '../hooks/useCartStore';
import staticImages from '../../static/staticImages';

type loaderRequest = {
  request: Request
}
export async function loader({ request }: loaderRequest) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('orderId') || '';
  const receipt = useFetchReceipt(searchTerm);
  return receipt;
}

type CompleteLoaderData = {
  id: string;
  menu: Food[];
  totalPrice: number;
}

const StyledComplete = styled.div`
  display: flex;
  flex-direction: column;
  /* display:none; */
  background: ${(props) => props.theme.colors.subBackground};
  padding: 80px 20px 0;
  margin-top: 58px;
  border-radius: 0px 8rem 0px 0px;
`;

const StyledCompleteHeader = styled.div`
  text-align: center;
  img {
    width: 120px;
    margin-bottom: 32px;
  }
  h2 {
    font-size: 8rem;
    line-height: 9.6rem;
    color: ${(props) => props.theme.colors.listTitle};
    margin-bottom: 16px;
  }
  p {
    font-size: 4.8rem;
    line-height: 5.8rem;
    color: ${(props) => props.theme.colors.completeTextGray};
    margin-bottom: 80px;
  }
`;

const StyledCompleteBody = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${(props) => props.theme.colors.completeBorder};
  h3 {
    font-size: 4.8rem;
    line-height: 5.8rem;
    color: ${(props) => props.theme.colors.listTitle};
    padding: 32px 40px;
  }
  ul {
    padding: 32px 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-top: 2px solid ${(props) => props.theme.colors.border};
    border-bottom: 2px solid ${(props) => props.theme.colors.border};
  }
  li {
    font-size: 3.2rem;
    line-height: 3.8rem;
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.listTitle};
  }
`;

const StyledCompleteTotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 42px 40px;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
  margin-bottom: 320px;
  p {
    font-size: 3.2rem;
    line-height: 3.8rem;
    color: ${(props) => props.theme.colors.listTitle};
    font-weight: bold;
  }
`;

const StyledTotalPrice = styled.p`
  color: ${(props) => props.theme.palette.primary};
  font-size: 4.8rem;
  line-height: 5.7rem;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 29px 0;
  margin-bottom: 50px;
  border-radius: 5rem;
  font-size: 2.8rem;
  line-height: 3.4rem;
  cursor: pointer;
  :hover {
    opacity: .9;
  }
`;

export default function Complete() {
  const [, cartStore] = useCartStore();
  const navigate = useNavigate();
  const loaderData = useLoaderData() as CompleteLoaderData;

  useEffect(() => {
    cartStore.reset();
  }, []);

  const handleClick = () => {
    navigate('/');
  };
  return (
    <StyledComplete>
      <StyledCompleteHeader>
        <img
          alt="complete"
          src={staticImages.complete}
        />
        <h2>
          주문이
          <br />
          완료되었습니다!
        </h2>
        <p>{`주문번호 ${loaderData.id}`}</p>
      </StyledCompleteHeader>
      <StyledCompleteBody>
        <h3>주문목록</h3>
        <ul>
          {loaderData.menu.map((food: Food, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${food.id}-${index}`}>
              <p>{food.name}</p>
              <p>{`${food.price.toLocaleString('ko-kr')}원`}</p>
            </li>
          ))}
        </ul>
        <StyledCompleteTotalPrice>
          <p>총 가격</p>
          <StyledTotalPrice>{`${loaderData.totalPrice.toLocaleString('ko-kr')}원`}</StyledTotalPrice>
        </StyledCompleteTotalPrice>
        <StyledButton
          onClick={handleClick}
        >
          메인화면으로 돌아가기
        </StyledButton>
      </StyledCompleteBody>
    </StyledComplete>
  );
}
