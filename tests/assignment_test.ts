Feature('과제 테스트');

Scenario('검색 결과 없음', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메가반점');

  I.click('한식');

  I.see('메리김밥');
  I.see('데브부엌');
  I.dontSee('메가반점');

  I.fillField('식당 이름 검색', '엄청 피곤하다');
  I.pressKey('Enter');

  I.see('검색결과가 없습니다.');
});

Scenario('장바구니 가지고 놀기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메가반점');
  I.see('메리김밥');

  I.click('짜장면');
  I.click('김밥');
  I.click('김밥');

  I.see('주문내역');
  I.see('총 결제 예상금액');

  I.waitForText('3개');
  I.waitForText('15,000원');

  I.click('짜장면 제거');

  I.waitForText('2개');
  I.waitForText('7,000원');

  I.click('취소');

  I.see('원하시는 주문을 터치해주세요');

  I.click('매장 주문');

  I.see('0개');
});
