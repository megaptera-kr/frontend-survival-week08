import { Button } from '../../atoms';

import useHandleNavigate from '../../hooks/useHandleNavigate';

export default function Cta() {
  const { handleNavigate } = useHandleNavigate();

  return (
    <Button
      $variant='ctaPrimary'
      $width='100%'
      $height='10rem'
      $borderRadius='8rem'
      onClick={() => handleNavigate('Home', null, true)}
    >
      메인화면으로 돌아가기
    </Button>
  );
}
