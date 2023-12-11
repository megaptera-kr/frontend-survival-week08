import { useDarkMode } from 'usehooks-ts';

import { Stack, Typography } from '../../atoms';

import { Container, Title, CtaCard } from './ui';

import useHandleNavigate from '../../hooks/useHandleNavigate';

import FullPackaging from '../../../static/icons/full_packaging.svg';

import StoreOrder from '../../../static/icons/store_order.svg';

function Intro() {
  const { handleNavigate } = useHandleNavigate();

  const { isDarkMode } = useDarkMode();

  const IntroList = [
    {
      title: '매장주문',
      icon: <FullPackaging width='20rem' />,
      onClick: () => handleNavigate('Order'),
    },
    {
      title: '전체 포장',
      icon: <StoreOrder width='20rem' />,
      onClick: () => handleNavigate('Order'),
    },
  ];

  return (
    <Container $direction='column'>
      <Title $as='h1' $variant='heading_02'>
        {'원하시는 주문을\n터치해주세요'}
      </Title>

      <Stack $direction='row' $gap='4rem'>
        {IntroList.map(({ title, icon, onClick }) => (
          <CtaCard
            key={title}
            $borderRadius='4rem'
            $gap='6rem'
            onClick={onClick}
            $isDarkmode={isDarkMode}
          >
            {icon}
            <Typography $as='p' $variant='heading_01'>
              {title}
            </Typography>
          </CtaCard>
        ))}
      </Stack>
    </Container>
  );
}

export default Intro;
