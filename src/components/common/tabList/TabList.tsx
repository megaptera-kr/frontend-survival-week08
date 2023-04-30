/* eslint-disable react/require-default-props */
import { useRef } from 'react';

import { useTabsKeyTrap } from '../../../hooks';
import { Tab } from './tab';
import type { Category } from '../../../types/kiosk';
import * as S from './TabList.styled';

interface TabItem<T extends Category> {
  id: T;
  label: string;
  panel: string;
}

interface TabListProps {
  className?: string;
  ariaLabel: string;
  tabs: Record<Category, TabItem<Category>>;
  currentTab: Category;
  selectTab: (tabId: Category) => void;
}

export default function TabList({
  className, ariaLabel, tabs, currentTab, selectTab,
}: TabListProps) {
  const tablistRef = useRef(null);

  const { handleKeyListener } = useTabsKeyTrap(tablistRef, selectTab);

  const handleSelectTab = (tabId: Category) => () => {
    selectTab(tabId);
  };

  return (
    <S.TabList
      className={className}
      ref={tablistRef}
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={handleKeyListener}
    >
      {Object.values(tabs).map(({ id, label, panel }) => (
        <Tab
          key={id}
          id={id}
          label={label}
          controlPanel={panel}
          isCurrentTab={id === currentTab}
          onClick={handleSelectTab(id)}
        />
      ))}
    </S.TabList>
  );
}
