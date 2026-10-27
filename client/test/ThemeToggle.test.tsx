import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeToggle from '../src/components/ThemeToggle'
import { stubMatchMedia } from './helpers'

const html = document.documentElement

afterEach(() => {
  html.classList.remove('dark')
  document.head.querySelector('meta[name="theme-color"]')?.remove()
})

function themeSwitch() {
  return screen.getByRole('switch')
}

describe('ThemeToggle', () => {
  it('starts from the class set on <html> before first paint', () => {
    stubMatchMedia()
    html.classList.add('dark')
    render(<ThemeToggle />)
    expect(themeSwitch()).toHaveAttribute('aria-checked', 'true')
    expect(themeSwitch()).toHaveAccessibleName('ብሩህ ገጽታ አድርግ')
  })

  it('switches theme, updates <html>, the theme-color meta and localStorage', async () => {
    stubMatchMedia()
    const meta = document.createElement('meta')
    meta.name = 'theme-color'
    document.head.appendChild(meta)
    render(<ThemeToggle />)
    expect(themeSwitch()).toHaveAttribute('aria-checked', 'false')

    await userEvent.click(themeSwitch())
    expect(html).toHaveClass('dark')
    expect(themeSwitch()).toHaveAttribute('aria-checked', 'true')
    expect(meta.getAttribute('content')).toBe('#0e141b')
    expect(localStorage.getItem('theme')).toBe('dark')

    await userEvent.click(themeSwitch())
    expect(html).not.toHaveClass('dark')
    expect(meta.getAttribute('content')).toBe('#116eee')
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('works from the keyboard', async () => {
    stubMatchMedia()
    render(<ThemeToggle />)
    themeSwitch().focus()
    await userEvent.keyboard('{Enter}')
    expect(html).toHaveClass('dark')
    await userEvent.keyboard(' ')
    expect(html).not.toHaveClass('dark')
  })

  it('follows the OS theme until the user picks one', async () => {
    const media = stubMatchMedia()
    render(<ThemeToggle />)

    act(() => media.setDark(true))
    expect(html).toHaveClass('dark')
    act(() => media.setDark(false))
    expect(html).not.toHaveClass('dark')

    await userEvent.click(themeSwitch())
    expect(html).toHaveClass('dark')
    act(() => media.setDark(false))
    expect(html).toHaveClass('dark')
  })

  it('still switches when localStorage is unavailable', async () => {
    stubMatchMedia()
    const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    render(<ThemeToggle />)
    await userEvent.click(themeSwitch())
    expect(html).toHaveClass('dark')
    expect(setItem).toHaveBeenCalledWith('theme', 'dark')
  })
})
