import { ListWrraper } from './ui';

import ListNodata from './ListNodata';

import useFilteredQuery from './hooks/useFilteredQuery';

import Restaurants from './Restaurants';

export default function List() {
  const { restaurants, renderNodata } = useFilteredQuery();

  return (
    <ListWrraper>
      {renderNodata && <ListNodata />}
      {restaurants?.map((item) => (
        <Restaurants key={item.name} item={item} />
      ))}
    </ListWrraper>
  );
}
