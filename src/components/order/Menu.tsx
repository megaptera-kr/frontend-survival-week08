import styled from 'styled-components';

import Receipt from '../../types/Receipt';

const MenuWrapStyle = styled.div`
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.colors.borderPrimary};
  border-bottom: 2px solid ${(props) => props.theme.colors.borderSecondary};
  margin-bottom: 31rem;

  h3 {
    font-size: 4.8rem;
    padding: 3.2rem 4rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  ul {
    border-top: 2px solid ${(props) => props.theme.colors.borderSecondary};
    border-bottom: 2px solid ${(props) => props.theme.colors.borderSecondary};
    padding: 3.2rem 4rem;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.4rem;

      &:last-child {
        margin-bottom: 0;
      }
      span {
        font-size: 3.2rem;
        color: ${(props) => props.theme.colors.textPrimary};
      }
    }

    &:last-child {
      border: 0;
      li {
        span {
          font-weight: 700;
        }
      }
    }

    .totalPrice {
      color: #ff8400;
      font-size: 4.8rem;
    }
  }
`;

type MenuProps = {
  order: Receipt;
};

function Menu({ order }: MenuProps) {
  const { menu } = order;
  return (
    <MenuWrapStyle>
      <h3>주문목록</h3>
      <ul>
        {menu.map((food, index) => {
          const key = `${food.id}_${index}`;
          return (
            <li key={key}>
              <span>{food.name}</span>
              <span>{`${food.price.toLocaleString()}원`}</span>
            </li>
          );
        })}
      </ul>
      <ul>
        <li>
          <span>총 가격</span>
          <span className="totalPrice">{`${order.totalPrice.toLocaleString()}원`}</span>
        </li>
      </ul>
    </MenuWrapStyle>
  );
}

export default Menu;
