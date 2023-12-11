import { ListWrraper, ListTitle } from './ui';

import List from './List';

import TotalPrice from './TotalPrice';

function ListSection() {
  return (
    <ListWrraper>
      <ListTitle $as='p' $variant='subHead_04'>
        주문목록
      </ListTitle>
      <List />
      <TotalPrice />
    </ListWrraper>
  );
}

export default ListSection;
