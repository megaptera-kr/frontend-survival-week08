import * as S from './Toggle.styled';

interface ToggleProps {
  ariaLabel:string;
  items: [string, string];
  isTurnOn: boolean;
  onToggle: () => void;
}

export default function Toggle({
  ariaLabel, items, isTurnOn, onToggle,
}: ToggleProps) {
  return (
    <S.Toggle
      role="switch"
      aria-checked={isTurnOn}
      aria-label={ariaLabel}
      onClick={onToggle}
    >
      {items.map((item) => <span key={item} aria-hidden="true">{item}</span>)}
    </S.Toggle>
  );
}
