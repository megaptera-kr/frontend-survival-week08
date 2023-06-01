import styled from 'styled-components';
import SwitchButton from './SwitchButton';
import Image from './Image';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5rem 3rem 0;
`;

const LeftSide = styled.div`
  width: 67%;
  height: 6rem;
  display: flex;
  align-items: center;
  gap: 2.6rem;
`;

const HeadingOne = styled.h1`
  height: 51px;

  font-family: 'Jalnan OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 6rem;

  letter-spacing: -0.03em;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LeftSide>
        <Image
          width="6.2rem"
          height="6rem"
          src="/images/logo.png"
          alt="logo"
        />
        <HeadingOne>메가테라 푸드코트 키오스크</HeadingOne>
      </LeftSide>
      <SwitchButton />
    </HeaderContainer>
  );
}
