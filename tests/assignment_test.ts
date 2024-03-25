Feature('과제 테스트');

Scenario('인트로 화면 표시', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');
  I.see('원하시는 주문을 터치해주세요!');
  I.see('매장주문');
  I.see('전체포장');
});

Scenario('OrdePage 화면 표시', ({ I }) => {
  I.amOnPage('/');

  I.click('매장주문');
  I.see('[매장주문]');
  I.amOnPage('/order');

  I.see('전체');
  I.see('중식');
  I.see('한식');
  I.see('일식');

  I.see('짜장면');
  I.see('김밥');

  I.see('주문내역');
  I.see('총 결제 예상금액');

  I.see('취소');
  I.see('주문하기');
});

Scenario('OrdePageComplete 화면 표시', ({ I }) => {
  I.amOnPage('/');

  I.click('매장주문');

  I.see('전체');
  I.click({ name: '#메가반점-짜장면' });
  I.wait(1);

  I.click('주문하기');

  I.see('주문번호');
  I.see('메인화면으로 돌아가기');
});
