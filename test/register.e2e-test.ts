import { expect, test } from '@playwright/test'

test('cadastro feito com sucesso', async ({ page }) => {
  await page.goto('/register', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Coffee Magic')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu melhor e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(99) 9 9999-9999')

  await page.getByRole('button', { name: 'Cadastrar' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  await expect(toast).toBeVisible()
})

test('cadastro com dados inválidos', async ({ page }) => {
  await page.goto('/register', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Nome inválido')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu melhor e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('123812641264')

  await page.getByRole('button', { name: 'Cadastrar' }).click()

  const toast = page.getByText('Restaurante já existe na base de dados!')

  await expect(toast).toBeVisible()
})

test('navegar para tela de login', async ({ page }) => {
  await page.goto('/register', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/login')
})
