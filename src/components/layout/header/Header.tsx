import { useDarkMode } from 'usehooks-ts';

import { Toggle } from '../../common';
import * as S from './Header.styled';

export default function Header() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <S.Header>
      <S.Container>
        <S.Content>
          <img src="./images/logo.png" alt="logo" />
          <h1>메가테라 푸드코트 키오스크</h1>
        </S.Content>
        <Toggle ariaLabel="다크모드 스위치" items={['밝게', '어둡게']} isTurnOn={isDarkMode} onToggle={toggle} />
      </S.Container>

    </S.Header>
  );
}
