import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { ButtonProps } from '../types/button';

const EntryPageContainer = styled.div`
  padding: 10em 3rem 25em;
`;

const EntryPageTitle = styled.h2`
  margin-bottom: 1em;
  line-height: 120%;
  text-align: center;
  font-size: 11rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const EntryPageButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EntryPageButton = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type || 'button',
}))<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 49%;
  padding: 2.5em 0;
  border: 1px solid transparent;
  border-radius: 1em;
  font-size: 4.8rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.entryPageButtonBg};
  cursor: pointer;

  & img {
    display: block;
    width: 40%;
    margin-bottom: 1em;
  }

  & span {
    color: ${(props) => props.theme.colors.globalText};
  }
`;

export default function EntryPage() {
  const navigate = useNavigate();
  const handleClickLinkBtn = () => {
    navigate({ pathname: '/order' });
  };

  return (
    <EntryPageContainer>
      <EntryPageTitle>원하시는 주문을 터치해주세요</EntryPageTitle>
      <EntryPageButtonWrap>
        <EntryPageButton onClick={handleClickLinkBtn}>
          <img src="/images/fastfood.png" alt="fastfood" />
          <span>매장 주문</span>
        </EntryPageButton>
        <EntryPageButton onClick={handleClickLinkBtn}>
          <img src="/images/bag.png" alt="bag" />
          <span>전체 포장</span>
        </EntryPageButton>
      </EntryPageButtonWrap>
    </EntryPageContainer>
  );
}
