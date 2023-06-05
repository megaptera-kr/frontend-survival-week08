Feature('나만의 E2E 과제 테스트');

Scenario('음식 주문 2개 중 1개 취소하고 주문하기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메가반점');
  I.see('데브부엌');

  I.click('제육덮밥');
  I.click('갈비탕');

  I.see('주문 내역');
  I.see('총 결제 예상금액');

  I.waitForText('2개');
  I.waitForText('21,000');

  I.click({ name: '제육덮밥-0' });

  I.waitForText('1개');
  I.waitForText('11,000');

  I.click('주문하기');

  I.waitForText('주문이 완료되었습니다!');
  I.see('주문목록');
  I.see('갈비탕');
});

Scenario('일식 식당 찾기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메가반점');

  I.click('일식');

  I.see('로드스시');
  I.see('혹등고래카레');
  I.dontSee('메가반점');

  I.fillField('검색', '혹등고래카레');
  I.see('기본카레');
  I.dontSee('기본초밥');
  I.dontSee('디저트');
});
