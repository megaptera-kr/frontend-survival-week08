import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import useCartStore from '../hooks/useCartStore';
import useRestaurants from '../hooks/useRestaurants';
import Menu from '../types/Menu';
import useCreateOrder from '../hooks/useCreateOrder';

const Container = styled.div`
  input::placeholder {
    color: #FFFFFF;
  }
`;

const SearchInput = styled.input`
  color: #FFFFFF;
  font-size: 3.2rem;
  padding: 0.5em;
  width: 100%;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 1.5rem;
  background: url(./images/icon-search.png) 98% 50% / 4rem no-repeat;
`;

const CategoryUl = styled.ul`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px;
  list-style: none;
`;

const CategoryLi = styled.li`
  width: 25%;

  button {
    font-size: 4rem;
    padding-block: 0.5em;
    width: 100%;
    border: 0px;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    background: transparent;
    color: rgb(255, 255, 255);
    cursor: pointer;
  }

  button.active {
    color: rgb(255, 132, 0);
    background: rgb(255, 255, 255);
    transition: all 0.3s ease 0s;
  }
`;

const MenuDiv = styled.div`
  padding-block: 3em;
  padding-inline: 3rem;
  border-top-right-radius: 8rem;
  background-color: rgb(255, 255, 255);
`;

const MenuTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;

  tr:last-child {
    border: none;
  }
`;

const MenuTr = styled.tr`
  display: flex;
  flex-direction: column;
  padding-block: 3em;
  border-bottom: 1px solid rgb(244, 244, 244);
`;

const MenuTd = styled.td`
  font-size: 4.8rem;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const MenuUl = styled.ul`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  list-style: none;
`;

const MenuButton = styled.button`
  border: 1px solid rgb(244, 244, 244);
  border-radius: 2em;
  margin: 0px;
  padding: 1em;
  background-color: rgb(244, 244, 244);
  text-align: start;
  color: rgb(0, 0, 0);
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHoverBackground};
  }
`;

const MenuImage = styled.img`
  display: block;
  margin: 0px auto;
  width: 75%;
`;

const MenuSpan = styled.span`
  font-size: 3.2rem;
  display: block;
  padding-block: 0.2em;
`;

const OrderDetailsBox = styled.div`
  padding: 3rem;
  background: rgb(244, 244, 244);
`;

const OrderDetailTitle = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const OrderDetailH2 = styled.h2`
  font-size: 3.2rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const OrderDetailCount = styled.span`
  font-size: 0.75em;
  margin-left: 0.5em;
  padding: 0.5em 1em;
  border-radius: 1em;
  background-color: rgb(255, 132, 0);
  color: rgb(255, 255, 255);
`;

const OrderDetailButtonBox = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const OrderDetailButton = styled.button`
  font-size: 2.8rem;
  padding-block: 1.3em;
  width: 49%;
  border: 0px;
  border-radius: 3em;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const OrderDetailUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5em;
  margin-block: 2em;
`;

const OrderDetailLi = styled.li`
  position: relative;
  padding: 1em 2em;
  border-radius: 1em;
  background-color: rgb(255, 255, 255);
  span {
    font-size: 2.8rem;
    display: block;
    padding-block: 1em;
  }
  span.price {
    color: rgb(255, 132, 0);
  }

  button {
    position: absolute;
    top: 8%;
    right: 8%;
    padding: 1rem;
    border: 0px;
    background: transparent;
    cursor: pointer;
`;
export default function OrderPage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const { restaurants } = useRestaurants({
    keyword: keyword.trim(), category: selectedCategory,
  });
  const [, store] = useCartStore();

  const handleClickMenu = (menu: Menu) => {
    store.addCart(menu);
  };

  return (
    <Container>
      <div style={{ padding: '0 2em' }}>
        <div style={{ paddingBlock: '1em 2em' }}>
          <SearchInput type="text" placeholder="식당 이름을 입력해주세요" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </div>
        <CategoryUl>
          <CategoryLi><button type="button" className="active" onClick={() => setSelectedCategory('전체')}>전체</button></CategoryLi>
          <CategoryLi><button type="button" onClick={() => setSelectedCategory('중식')}>중식</button></CategoryLi>
          <CategoryLi><button type="button" onClick={() => setSelectedCategory('한식')}>한식</button></CategoryLi>
          <CategoryLi><button type="button" onClick={() => setSelectedCategory('일식')}>일식</button></CategoryLi>
        </CategoryUl>
      </div>
      <MenuDiv>
        <MenuTable>
          <tbody>
            {
              restaurants.map((restaurant) => (
                <MenuTr
                  key={restaurant.id}
                >
                  <MenuTd>{restaurant.name}</MenuTd>
                  <MenuTd>
                    <MenuUl>
                      {
                        restaurant.menu.map((menu) => (
                          <li key={menu.id} style={{ width: '30%' }}>
                            <MenuButton
                              onClick={() => handleClickMenu(menu)}
                            >
                              <MenuImage src={menu.image} />
                              <MenuSpan>{menu.name}</MenuSpan>
                              <MenuSpan>{`${menu.price.toLocaleString()}원`}</MenuSpan>
                            </MenuButton>
                          </li>
                        ))
                      }
                    </MenuUl>
                  </MenuTd>
                </MenuTr>
              ))
            }
          </tbody>
        </MenuTable>
      </MenuDiv>
      <OrderDetailsBox>
        <OrderDetailTitle>
          <OrderDetailH2>
            <img style={{ display: 'block', marginRight: '0.1em', width: '1.2em' }} src="./images/shopping-cart.png" alt="" />
            <span>주문내역</span>
            <OrderDetailCount>
              {store.count}
              개
            </OrderDetailCount>
          </OrderDetailH2>
          <div style={{ fontSize: '3.2rem' }}>
            총 결제 예상금액
            <strong style={{ color: 'rgb(255, 132, 0)' }}>{store.totalPrice.toLocaleString()}</strong>
            원
          </div>
        </OrderDetailTitle>
        <OrderDetailUl>
          {
            store.cart.map((menu, index) => (
              <OrderDetailLi key={`menu-${menu.id}-${String(index)}`}>
                <span>{menu.name}</span>
                <span>{`${menu.price.toLocaleString()}원`}</span>
                <button type="button" onClick={() => store.removeCart(index)}>X</button>
              </OrderDetailLi>
            ))
          }
        </OrderDetailUl>
        <OrderDetailButtonBox>
          <OrderDetailButton
            type="button"
            style={{ backgroundColor: 'rgb(68, 39, 43)' }}
            onClick={() => {
              store.resetCart();
              navigate('/');
            }}
          >
            취소
          </OrderDetailButton>
          <OrderDetailButton
            type="button"
            style={{ backgroundColor: 'rgb(255, 132, 0)' }}
            onClick={async () => {
              const id = await useCreateOrder(store.cart, store.totalPrice);
              navigate(`/order/complete?orderId=${id}`);
            }}
          >
            주문하기
          </OrderDetailButton>
        </OrderDetailButtonBox>
      </OrderDetailsBox>
    </Container>
  );
}
