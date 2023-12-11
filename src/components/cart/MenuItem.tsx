import styled from 'styled-components';
import type Food from '../../types/Food';

const Div = styled.div`
  background: ${(props) => props.theme.colors.background};
  box-sizing: border-box;
  padding: 30px;
  border-radius: 20px;
  text-align: start;
  font-weight: 500;
  font-size: 20px;
  font-family: Pretendard-Regular;
  color: ${(props) => props.theme.colors.tableText};
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  span {
    color: ${(props) => props.theme.colors.cart};
  }
`;

type MenuItemType = {
  item: Food;
  index: number;
  onDelete: (index: number) => void;
}

export default function MenuItem({ item, index, onDelete }:MenuItemType) {
  return (
    <Div>
      <section>
        {item.name}
        <button type="button" onClick={() => onDelete(index)}>
          <img src="images/clear.png" alt="deleteIcon" />
        </button>
      </section>
      <span>
        {item.price.toLocaleString()}
        원
      </span>
    </Div>
  );
}
