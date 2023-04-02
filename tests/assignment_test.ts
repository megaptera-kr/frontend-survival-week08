Feature('푸드코트 키오스크 과제 테스트');

Scenario('인트로 페이지', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');

  I.see('매장 주문');
  I.dontSee('전체 포장');

  I.click('매장 주문');
});
