import styled from 'styled-components';
import Food from '../../type/Food';

type MenuListProps = {
  menu : Food
}

const Div = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem;
span{
  font-size: 3.2rem;
  color: ${((props) => (props.theme.colors.font))};
}
`;

export default function MenuList({ menu }:MenuListProps) {
  return (
    <Div>
      <span>
        {menu.name}
      </span>
      <span>
        {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원
      </span>
    </Div>
  );
}
