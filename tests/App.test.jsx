/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('when dark mode is active', () => {
    const button = screen.getByRole('button', { name: 'change theme' })
    fireEvent.click(button)
    expect(screen.getByTestId('light-theme-icon')).toBeDefined()
  })

  it('when not have class dark mode active', () => {
    const main = screen.getByRole('main')
    expect(main).not.toHaveClass('')
  })
})
