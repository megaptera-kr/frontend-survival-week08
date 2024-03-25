Feature('과제 테스트 코드 작성');

Scenario('Intro Page', ({ I }) => {
  I.amOnPage('/');

  I.see('메가테라 푸드코트 키오스크');
  I.see('원하시는 주문을 터치해주세요');
  I.see('매장 주문');
  I.see('전체 포장');

  I.click('전체 포장');
});

Scenario('식당찾기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('로드스시');

  I.click('일식');

  I.see('기본초밥');
  I.see('디저트');
  I.dontSee('메가김밥');

  I.fillField('검색', '혹등');

  I.see('기본카레');
  I.see('밥추가');
  I.see('카레우동');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/order');

  I.waitForText('데브부엌');
  I.see('제육덮밥');

  I.click('갈비탕');
  I.click('돈까스');
  I.click('디저트');

  I.click('주문하기');

  I.waitForText('주문이 완료되었습니다!');
  I.see('주문목록');
  I.see('갈비탕');
  I.see('돈까스');
});
