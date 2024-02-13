import React from 'react';
import { MenuData } from '../../../../hooks/useFetchData';

type MenuRowProps = {
  isHead: boolean;
  data: MenuData;
  category: string;
}

export default function MenuRow({
  isHead,
  data,
  category,
}: MenuRowProps) {
  return (
    <tr>
      {isHead && <td rowSpan={3}>{category}</td>}
      <td>
        <button type="button">
          {data.name}
          {' '}
          {data.price}
          원
        </button>
      </td>
    </tr>
  );
}
