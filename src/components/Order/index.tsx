import { Container } from './ui';

import Cart from './Cart';

import List from './List';

import Search from './Search';

export default function Order() {
  return (
    <Container>
      <Search />
      <List />
      <Cart />
    </Container>
  );
}
