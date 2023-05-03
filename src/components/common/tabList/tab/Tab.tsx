import * as S from './Tab.styled';

interface TabProps<T> {
  id: T;
  label: string;
  controlPanel: string;
  isCurrentTab: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Tab<T extends string>({
  id, label, controlPanel, isCurrentTab, onClick,
}: TabProps<T>) {
  return (
    <S.Tab
      id={id}
      tabIndex={isCurrentTab ? 0 : -1}
      role="tab"
      aria-controls={controlPanel}
      aria-selected={isCurrentTab}
      aria-label={label}
      onClick={onClick}
    >
      <span>{label}</span>
    </S.Tab>
  );
}
