import styled from 'styled-components';
import Restaurant from '../../type/Restaurant';
import Menu from './Menu';

type FilteredRestaurantsTableProps = {
  restaurant:Restaurant
}

const Tr = styled.tr`
td{
  display: block;
  padding: 2rem;
}
.name{
  padding : 3rem;
  font-size: 4.5rem;
  font-weight: bold;
  color: ${((props) => (props.theme.colors.font))}
}
.menu{
  display: flex;
  justify-content: space-between;
}
`;

export default function FilteredRestaurantsTable({ restaurant }:FilteredRestaurantsTableProps) {
  return (
    <Tr>
      <td className="name">{restaurant.name}</td>
      <td className="menu">
        {
          (restaurant.menu).map((menu) => (
            <Menu key={menu.id} menu={menu} />
          ))
        }
      </td>
    </Tr>
  );
}
