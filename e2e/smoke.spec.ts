import { test, expect } from '@playwright/test'

test('loads the app', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Noughts & Crosses' })).toBeVisible()
})
