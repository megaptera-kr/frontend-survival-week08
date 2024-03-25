Feature('과제 테스트');

Scenario('매장 주문 클릭 후 OrderPage 표시', ({ I }) => {
  I.amOnPage('/');

  I.click('매장주문');
  I.see('[매장주문]');
});

Scenario('전체 포장 클릭 후 OrderPage 표시', ({ I }) => {
  I.amOnPage('/');

  I.click('전체포장');
  I.see('[전체포장]');
});

Scenario('레스토랑 필터링', ({ I }) => {
  I.amOnPage('/');

  I.click('전체포장');

  I.see('전체');
  I.see('한식');
  I.see('중식');
  I.see('일식');

  I.click('한식');

  I.see('메리김밥');
  I.see('김밥');
  I.see('제육덮밥');

  I.dontSee('메가반점');
  I.dontSee('로드스시');

  // 초기화
  I.click('전체');

  // 검색 결과 없는 경우
  I.fillField('식당 이름을 입력해주세요', 'a');
  I.see('검색 결과가 없습니다');

  // 검색 결과가 있는 경우
  I.fillField('식당 이름을 입력해주세요', '로드');
  I.see('로드스시');
  I.dontSee('메가반점');
});

Scenario('메뉴 카트에 추가하기', ({ I }) => {
  I.amOnPage('/');

  I.click('전체포장');
  I.click('중식');
  I.see('짜장면');
  I.see('주문내역 0개');

  I.click({ name: '#메가반점-짜장면' });

  I.see('주문내역 1개');
  I.see('총 결제 예상금액 8,000원');
  I.see('짜장면');
  I.see('1개');
  I.see('8,000원');

  I.click({ name: '#메가반점-짜장면' });
  I.wait(1);
  I.see('짜장면');
  I.see('2개');
  I.see('총 결제 예상금액 16,000원');
});

Scenario(
  '메뉴 카트에 추가 후, 취소 버튼 클릭하여 인트로페이지로 돌아가기',
  ({ I }) => {
    I.amOnPage('/');

    I.click('전체포장');
    I.click('중식');
    I.see('짜장면');
    I.see('주문내역 0개');

    I.click({ name: '#메가반점-짜장면' });

    I.see('주문내역 1개');
    I.see('총 결제 예상금액 8,000원');
    I.see('짜장면');
    I.see('1개');
    I.see('8,000원');

    I.click({ name: '#메가반점-짜장면' });
    I.wait(1);
    I.see('짜장면');
    I.see('2개');
    I.see('총 결제 예상금액 16,000원');

    I.click('취소');
    I.see('원하시는 주문을 터치해주세요!');
  },
);

Scenario('메뉴 카트에 추가 후, 주문하기 버튼 클릭', ({ I }) => {
  I.amOnPage('/');

  I.click('전체포장');
  I.click('중식');
  I.click({ name: '#메가반점-짜장면' });
  I.click('주문하기');

  I.see('메인화면으로 돌아가기');
  I.see('완료되었습니다!');

  I.click('메인화면으로 돌아가기');
  I.see('원하시는 주문을 터치해주세요!');
});
