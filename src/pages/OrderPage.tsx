import { SetStateAction, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import styled from 'styled-components';
import SearchInput from '../components/SearchInput';
import useFilteredRestaurant from '../hooks/useFilteredRestaurant';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import { Menu, ReceiptProps } from '../types/restaurants';
import CategoryButtons from '../components/CategoryButtons';
import ShopList from '../components/ShopList';
import Carts from '../components/Carts';
import order from '../network/api';

export default function OrderPage() {
  const [shopName, setShopName] = useState('');
  const restaurants = useFetchRestaurants();

  const { selectedCategory, setSelectedCategory, filteredRestaurant } = useFilteredRestaurant('전체', restaurants, shopName);
  const [carts, setCarts] = useLocalStorage<Menu[]>('carts', []);
  const navigate = useNavigate();

  const addCart = (item: Menu) => {
    setCarts([...carts, item]);
  };

  const totalPrice = carts.reduce((a, b) => a + b.price, 0);

  const cancelOrder = (idx: number) => {
    carts.splice(idx, 1);
    setCarts(carts);
  };

  const onClickOrder = () => {
    if (carts.length) {
      order(carts, totalPrice)
        .then((res:ReceiptProps) => {
          navigate('/order/completed', { state: res });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <SearchInput
        shopName={shopName}
        setShopName={setShopName}
      />

      <CategoryButtons
        restaurants={restaurants}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <ShopList
        filteredRestaurant={filteredRestaurant}
        addCart={addCart}
      />

      <Carts
        carts={carts}
        totalPrice={totalPrice}
        cancelOrder={cancelOrder}
        onClickOrder={onClickOrder}
        setCarts={setCarts}
      />
    </>

  );
}
