import { expect, test } from '@playwright/test'

test('atualização de perfil com sucesso', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Coffee Magic' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Rocket Café')
  await page.getByLabel('Descrição').fill('Another Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Rocket Café' })).toBeVisible()
})
