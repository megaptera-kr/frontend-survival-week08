import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Restaurnant } from '../types/restaurants';

interface CategoryProps {
    restaurants: Restaurnant[],
    setSelectedCategory:Dispatch<SetStateAction<string>>,
    selectedCategory:string
}

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  padding:0 20px;
`;

const Ul = styled.div<{selected: boolean}>`
   
  border-radius: 20px 20px 0px 0px;
  background-color: ${(props) => (props.selected ? 'white' : 'none')}
`;

const Li = styled.button<{selected:boolean}>`
  height: 84px;
  width: 230px;
  left: 30px;
  top: 280px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${(props) => (props.selected ? 'orange' : 'white')};
  background:none;
`;

export default function CategoryButtons({
  restaurants, setSelectedCategory, selectedCategory,
}:CategoryProps) {
  const categoryNames = [
    '전체',
    ...new Set(restaurants?.map((shop: { category: string; }) => shop.category)),
  ];

  return (
    <Container>
      {categoryNames.map((name) => (
        <Ul key={name} selected={selectedCategory === name}>
          <Li type="button" selected={selectedCategory === name} onClick={() => setSelectedCategory(name)}>{name}</Li>
        </Ul>
      ))}
    </Container>
  );
}
