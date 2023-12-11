import styled from 'styled-components';

import { Stack, Typography } from '../../atoms';

import useSearch from './hooks/useSearch';

const Wrraper = styled(Stack)`
  padding: 8rem;
`;

const Nodata = styled(Typography)`
  text-align: center;
`;

export default function ListNodata() {
  const { query } = useSearch();

  if (!query) return null;

  return (
    <Wrraper>
      <Nodata $as='p' $variant='body_02'>
        {`'${query}' 와 일치하는 식당이 없습니다.`}
      </Nodata>
    </Wrraper>
  );
}
