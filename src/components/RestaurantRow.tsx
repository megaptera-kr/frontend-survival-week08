import styled from 'styled-components';
import Restaurant from '../types/Restaurant';
import Menu from './Menu';

const Container = styled.tr`
   display: flex;
   flex-direction: column;
   border-bottom: 2px solid ${(props) => props.theme.colors.line};
   padding-bottom: 8rem;
   &:last-of-type {
     border-bottom: 0;
   }
   td:first-child {
     font-size: 4.8rem;
     font-weight: 700;
     margin-top: 8rem;
     margin-bottom: 2rem;
   }
 `;

 type RestaurantRowProps = {
   restaurant: Restaurant;
 }

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { name, menu } = restaurant;

  return (
    <Container>
      <td>
        {name}
      </td>
      <td>
        <Menu menu={menu} />
      </td>
    </Container>
  );
}
