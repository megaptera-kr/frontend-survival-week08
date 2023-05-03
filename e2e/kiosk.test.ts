import { test, expect } from '@playwright/test';

test('Intro page', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 2, name: '원하시는 주문을 터치해주세요' })).toBeVisible();
  await expect(page.getByRole('link', { name: '매장 주문' })).toBeVisible();
  await expect(page.getByRole('link', { name: '전체 포장' })).toBeVisible();

  await page.getByRole('link', { name: '매장 주문' }).click();
});

test('Order Cart', async ({ page }) => {
  await page.goto('/order');

  await expect(page.getByText('메가반점')).toBeVisible();
  await expect(page.getByText('메리김밥')).toBeVisible();
  await expect(page.getByText('데브부엌')).toBeVisible();
  await expect(page.getByText('로드스시')).toBeVisible();

  await page.getByRole('button', { name: '짜장면 담기' }).click();
  await page.getByRole('button', { name: '짜장면 담기' }).click();
  await page.getByRole('button', { name: '짬뽕 담기' }).click();

  await expect(page.getByText('주문내역')).toBeVisible();
  await expect(page.getByText('3개')).toBeVisible();
  await expect(page.getByText('총 결제 예상금액 24,000원')).toBeVisible();

  await page.getByRole('button', { name: '주문 하기' }).click();

  await expect(page.getByText('주문이 완료되었습니다!')).toBeVisible();
  await expect(page.getByText('주문목록')).toBeVisible();
  // await expect(page.getByText('짜장면')).toBeVisible();
  await expect(page.getByText('짬뽕')).toBeVisible();
  // await expect(page.getByText('짜장면')).toBeVisible();
  await expect(page.getByText('24,000원')).toBeVisible();

  await page.getByRole('button', { name: '메인화면으로 돌아가기' }).click();
});

test('Restaurants Filter', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: '매장 주문' }).click();

  await page.locator('button[aria-label="중식"]').click();

  await expect(page.getByText('짜장면')).toBeVisible();
  await expect(page.getByText('짬뽕')).toBeVisible();
  await expect(page.getByText('탕수육')).toBeVisible();
  await expect(page.getByText('김밥')).toBeHidden();

  await page.getByLabel('식당 이름 검색').fill('아무거나');
  await page.keyboard.press('Enter');

  await expect(page.getByText('검색결과가 없습니다.')).toBeVisible();

  await page.getByLabel('식당 이름 검색').fill('메가반점');
  await page.keyboard.press('Enter');

  await expect(page.getByText('짜장면')).toBeVisible();
  await expect(page.getByText('짬뽕')).toBeVisible();
  await expect(page.getByText('탕수육')).toBeVisible();
});
