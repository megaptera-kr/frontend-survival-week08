Feature('과제 테스트');

Scenario('test', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');
  I.see('원하시는 주문을 터치해주세요');

  I.click('매장 주문');
  I.see('메가반점');
  I.see('데브부엌');

  I.click({ name: '#짜장면' });
  I.click({ name: '#제육김밥' });

  I.click('주문하기');

  I.see('주문이 완료되었습니다!');
  I.see('짜장면');
  I.see('제육김밥');

  I.click('메인화면으로 돌아가기');
  I.see('원하시는 주문을 터치해주세요');
});
