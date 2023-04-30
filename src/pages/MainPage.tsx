import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 11rem;
  line-height: 14rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white}
`;

function MainPage() {
  return (
    <div>
      <StyledTitle>원하시는 주문을 터치해주세요</StyledTitle>
    </div>
  );
}

export default MainPage;
