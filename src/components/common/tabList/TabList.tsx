/* eslint-disable react/require-default-props */
import { useRef } from 'react';

import { useTabsKeyTrap } from '../../../hooks';
import { Tab } from './tab';
import * as S from './TabList.styled';

interface TabItem<T extends string> {
  id: T;
  label: string;
  panel: string;
}

interface TabListProps<T extends string> {
  className?: string;
  ariaLabel: string;
  tabs: ReadonlyArray<TabItem<T>>;
  currentTab: T;
  selectTab: (tabId: T) => void;
}

export default function TabList<T extends string>({
  className, ariaLabel, tabs, currentTab, selectTab,
}: TabListProps<T>) {
  const tablistRef = useRef(null);

  const { handleKeyListener } = useTabsKeyTrap(tablistRef, selectTab);

  const handleSelectTab = (tabId: T) => () => {
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
      {tabs.map(({ id, label, panel }) => (
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
