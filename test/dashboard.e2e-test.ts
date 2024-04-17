import { expect, test } from '@playwright/test'

test('métricas de pedidos diários', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('métricas de pedidos mensais', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(page.getByText('+7% em relação ao mês passado')).toBeVisible()
})

test('métricas de pedidos cancelados por mês', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()
})

test('exibir métrica de receita do mês', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 200,00')).toBeVisible()
  expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()
})
