// TODO: 나만의 E2E 테스트를 작성해 보세요.
Feature('나만의 과제 테스트');

Scenario('인트로 화면', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');
  I.see('밝게');
  I.see('어둡게');
  I.see('매장 주문');
  I.see('전체 포장');

  I.click('매장 주문');
});

Scenario('식당 찾기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메가반점');
  I.fillField('검색', '혹등');

  I.see('혹등고래카레');
  I.dontSee('메가반점');

  I.fillField('검색', '데브');

  I.see('갈비탕');
  I.dontSee('짜장면');
  I.dontSee('로드스시');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메가반점');
  I.see('데브부엌');

  I.see('주문내역');
  I.see('총 결제 예상금액');
  I.see('취소');
  I.see('주문하기');

  I.click('비빔밥');

  I.see('1개');
  I.see('총 결제 예상금액 8,000원');

  I.click('김밥');
  I.click('김밥');
  I.click(locate('button').withText('X').last()); // 마지막 X 버튼 찾아서 클릭해줘

  I.see('2개');
  I.see('총 결제 예상금액 11,500원');

  I.click('주문하기');
});

Scenario('주문 결과확인', ({ I }) => {
  I.amOnPage('/order/complete?orderId=1715244862391');

  I.see('주문이 완료되었습니다!');
  I.see('1715244862391');

  I.see('메인화면으로 돌아가기');
});
