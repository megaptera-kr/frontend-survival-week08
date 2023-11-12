import { useBoolean } from 'usehooks-ts';

import PrimaryButton from './Layout';

export default function Switch() {
  const { value: active, toggle } = useBoolean();
  const handleClick = () => {};

  return (
    <PrimaryButton onClick={toggle} active={active}>
      On/Off
    </PrimaryButton>
  );
}
