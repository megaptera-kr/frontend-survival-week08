import React from 'react';

type MenuRowProps = {
  isHead: boolean;
}

export default function MenuRow({
  isHead,
}: MenuRowProps) {
  return (
    <tr>
      {isHead && <th rowSpan={3}>메가반점</th>}
      <td><button type="button">짜장면 8000원</button></td>
    </tr>
  );
}
