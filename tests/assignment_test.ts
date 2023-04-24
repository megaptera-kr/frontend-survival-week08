Feature('푸드코트 키오스크 과제 테스트');

Scenario('인트로 페이지', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');

  I.see('매장 주문');
  I.click('매장 주문');
  I.dontSee('전체 포장');
});

Scenario('음식 주문', ({ I }) => {
  I.amOnPage('/order');
  I.seeElement('#input-검색');

  I.click('중식');
  I.see('짜장면');
  I.dontSee('김밥');
  I.click('주문 하기');
});

Scenario('주문 완료', ({ I }) => {
  I.amOnPage('/order/completed');

  I.see('주문이 완료되었습니다!');
});
