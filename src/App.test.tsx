import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

test('shows the title', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: 'Noughts & Crosses' })).toBeInTheDocument()
})
