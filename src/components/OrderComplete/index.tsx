import { Container } from './ui';

import SuccessMessage from './SuccessMessage';

import ListSection from './ListSection';

import Cta from './Cta';

import useAccessible from './hooks/useAccessible';

export default function OrderComplete() {
  useAccessible();

  return (
    <Container>
      <SuccessMessage />
      <ListSection />
      <Cta />
    </Container>
  );
}
