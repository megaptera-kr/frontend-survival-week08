import React from 'react';
import MenuInCategory from './MenuInCategory';

export default function MenuTable() {
  return (
    <div className="menu-table">
      <h2>식당별 메뉴</h2>
      <table>
        <thead>
          <th>식당 이름</th>
          <th>메뉴</th>
        </thead>
        <MenuInCategory />
      </table>
    </div>
  );
}
