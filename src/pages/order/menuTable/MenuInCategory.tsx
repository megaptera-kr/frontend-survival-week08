import React from 'react';
import MenuRow from './MenuRow';

export default function MenuInCategory({ data } : {
  data?: [];
}) {
  return (
    <tbody>
      <MenuRow isHead />
      <MenuRow isHead={false} />
      <MenuRow isHead={false} />
    </tbody>
  );
}
