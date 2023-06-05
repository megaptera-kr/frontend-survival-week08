Feature('과제 테스트');

Scenario('인트로 화면', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');
  I.see('원하시는 주문을 터치해주세요');

  I.click('매장 주문');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메가반점');
  I.see('데브부엌');

  I.click('짜장면');
  I.click('짬뽕');

  I.see('주문내역');
  I.see('총 결제 예상금액');

  I.waitForText('2개');
  I.waitForText('16,000');

  I.click('주문하기');

  I.waitForText('완료되었습니다!');
  I.see('주문목록');
  I.see('짜장면');
  I.see('짬뽕');
});

Scenario('식당 찾기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('메가반점');

  I.click('중식');

  I.see('짜장면');
  I.see('짬뽕');
  I.dontSee('메리김밥');

  I.fillField(locate('input').withAttr({ placeholder: '식당 이름을 입력해주세요' }), '메가');
  I.see('짜장면');
  I.see('짬뽕');
  I.dontSee('돈까스');
  I.dontSee('연어');
});
