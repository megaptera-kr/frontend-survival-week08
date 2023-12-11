import { Input } from '../../atoms';

import { SearchIcon } from './ui';

import useSearch from './hooks/useSearch';

export default function SearchInput() {
  const { query, handleChangeQuery } = useSearch();

  return (
    <Input>
      <Input.Text
        value={query}
        onChange={handleChangeQuery}
        placeholder='식당이름을 입력해 주세요.'
      />
      <Input.Icon>
        <SearchIcon width='4rem' />
      </Input.Icon>
    </Input>
  );
}
