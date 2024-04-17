import { expect, test } from '@playwright/test'

test('login efetuado com sucesso', async ({ page }) => {
  await page.goto('/login', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Um link de autenticaçao foi enviado para o seu e-mail!',
  )

  expect(toast).toBeVisible()
  await page.waitForTimeout(2000)
})

test('login com credenciais erradas', async ({ page }) => {
  await page.goto('/login', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('E-mail inválido ou inexistente!')

  expect(toast).toBeVisible()
  await page.waitForTimeout(2000)
})

test('navegar para página do restaurante', async ({ page }) => {
  await page.goto('/login', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/register')
})
