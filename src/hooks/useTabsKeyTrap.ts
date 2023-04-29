import type { RefObject } from 'react';

type Listener = (e: React.KeyboardEvent) => void;

interface UseTabsKeyTrap {
  handleKeyListener: Listener
}

export default function useTabsKeyTrap<T extends string>(
  ref: RefObject<HTMLElement>,
  selectTab: (tabId: T) => void,
): UseTabsKeyTrap {
  const getParseMenuKeyTrap = (e: React.KeyboardEvent) => {
    const menuNodeList = Array.from(
      (ref.current as HTMLElement).querySelectorAll(
        '[role=tab]',
      ),
    );
    const eventTarget = e.target;
    const firstMenuNdoe = menuNodeList[0] as HTMLElement;
    const lastMenuNode = menuNodeList.at(-1) as HTMLElement;
    const isFirstMenuNdoe = Object.is(eventTarget, firstMenuNdoe);
    const isLastMenuNode = Object.is(eventTarget, lastMenuNode);
    const index = Array.from(menuNodeList).indexOf(eventTarget as HTMLElement);
    const prevMenuNode = menuNodeList[Math.max(index - 1, 0)] as HTMLElement;
    const nextMenuNode = menuNodeList[Math.min(index + 1, menuNodeList.length - 1)] as HTMLElement;

    return {
      menuNodeList,
      firstMenuNdoe,
      lastMenuNode,
      isFirstMenuNdoe,
      isLastMenuNode,
      prevMenuNode,
      nextMenuNode,
    };
  };

  const setSelectedTab = (el: HTMLElement) => {
    el.focus();
    selectTab(el.getAttribute('id') as T);
  };

  const handleSelectedToPrevMenu: Listener = (e) => {
    if (!ref.current) return;
    e.preventDefault();
    const { isFirstMenuNdoe, lastMenuNode, prevMenuNode } = getParseMenuKeyTrap(e);
    const targetEl = isFirstMenuNdoe ? lastMenuNode : prevMenuNode;

    setSelectedTab(targetEl);
  };

  const handleSelectedToNextMenu: Listener = (e) => {
    if (!ref.current) return;
    e.preventDefault();
    const { isLastMenuNode, firstMenuNdoe, nextMenuNode } = getParseMenuKeyTrap(e);
    const targetEl = isLastMenuNode ? firstMenuNdoe : nextMenuNode;

    setSelectedTab(targetEl);
  };

  const handleFocusFirstMenu: Listener = (e) => {
    if (!ref.current) {
      return;
    }
    e.preventDefault();
    const { firstMenuNdoe } = getParseMenuKeyTrap(e);

    setSelectedTab(firstMenuNdoe);
  };

  const handleFocusLastMenu: Listener = (e) => {
    if (!ref.current) {
      return;
    }
    e.preventDefault();

    const { lastMenuNode } = getParseMenuKeyTrap(e);

    setSelectedTab(lastMenuNode);
  };

  const handleKeyListener: Listener = (e) => {
    const keyListenerMap = new Map<string, Listener>([
      ['Left', handleSelectedToPrevMenu],
      ['ArrowLeft', handleSelectedToPrevMenu],
      ['Right', handleSelectedToNextMenu],
      ['ArrowRight', handleSelectedToNextMenu],
      ['Home', handleFocusFirstMenu],
      ['End', handleFocusLastMenu],
    ]);

    const listener = keyListenerMap.get(e.key);

    if (listener) {
      listener(e);
    }
  };

  return {
    handleKeyListener,
  };
}
