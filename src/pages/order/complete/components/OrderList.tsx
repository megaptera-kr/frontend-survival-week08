import styled from 'styled-components';

import Menu from '../../../../types/Menu';

const Menus = styled.ul`
  font-size: 3.2rem;
  padding-inline: 4rem;
  padding-block: 3.4rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};

  li {
    display: flex;
    margin-bottom: 2.4rem;
    justify-content: space-between;
  }

  li:last-of-type {
    margin-bottom: 0;
  }
`;

type OrderListProps = {
  menus: Menu[];
};

export default function OrderList({ menus }: OrderListProps) {
  return (
    <Menus>
      {menus?.map((menu) => (
        <li key={menu.id}>
          <span>{menu?.name}</span>
          <span>
            {menu?.price.toLocaleString()}
            원
          </span>
        </li>
      ))}
    </Menus>
  );
}
