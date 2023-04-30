import styled from 'styled-components';
import Food from '../../types/FoodType';

const ListSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-block: 4rem;
`;

const CartCard = styled.div`
  background: white;
  border-radius: 20px;
  margin: 10px;
  padding: 30px;

  p {
    font-size: 2.8rem;
    padding-block: 1em;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DeleteButton = styled.button`
  background: rgba(0, 0, 0, 0);
  border: 0;
  cursor: pointer;
`;

type CartListProps = {
  selectedMenus: Food[],
  setSelectedMenus: React.Dispatch<React.SetStateAction<Food[]>>,
}

function CartList({ selectedMenus, setSelectedMenus }:CartListProps) {
  return (
    <ListSection>
      {
        selectedMenus.map((menu, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <CartCard key={`${idx} + ${menu.id}`}>
            <ButtonSection>
              <DeleteButton
                type="button"
                onClick={() => {
                  setSelectedMenus((prevState) => [...prevState].filter((item, i) => i !== idx));
                }}
              >
                x
              </DeleteButton>
            </ButtonSection>
            <p>{menu.name}</p>
            <p>{menu.price}</p>
          </CartCard>
        ))
      }
    </ListSection>
  );
}

export default CartList;
