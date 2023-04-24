Feature('푸드코트 키오스크 과제 테스트');

Scenario('인트로 페이지', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');

  I.see('매장 주문');
  I.see('전체 포장');

  I.click('매장 주문');
});

Scenario('음식 주문', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메리김밥');
  I.see('로드스시');

  I.click('짬뽕');
  I.click('탕수육');
  I.click('김밥');

  I.see('주문내역');
  I.see('총 결제 예상금액');

  I.waitForText('3개');
  I.waitForText('25,500원');

  I.click('주문하기');

  I.waitForText('주문이 완료되었습니다!');
  I.see('주문목록');
  I.see('짬뽕');
  I.see('탕수육');
  I.see('김밥');
});
