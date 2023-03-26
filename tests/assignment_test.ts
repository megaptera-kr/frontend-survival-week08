Feature('푸드코트 키오스크 과제 테스트');

Scenario('인트로 페이지', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');

  I.see('매장 주문');

  I.click('//div[contains(., "매장 주문")]');
});

Scenario('음식 주문', ({ I }) => {
  I.amOnPage('/order');

  I.see('메가반점');

  I.click('//li[contains(., "짜장면")]');
  I.click('//li[contains(., "김밥")]');
  I.click('//li[contains(., "제육덮밥")]');

  I.seeElement('//span[contains(., "3개")]');
  I.seeElement('//span[contains(., "21,500")]');

  I.click('주문 하기');
});

Scenario('주문 완료', ({ I }) => {
  I.amOnPage('/order');

  I.see('메가반점');

  I.click('//li[contains(., "짜장면")]');
  I.click('//li[contains(., "김밥")]');
  I.click('//li[contains(., "제육덮밥")]');

  I.click('주문 하기');

  I.amOnPage('/order/complete');

  I.see('주문목록');
  I.seeElement('//span[contains(., "21,500")]');

  I.click('메인화면으로 돌아가기');
});
