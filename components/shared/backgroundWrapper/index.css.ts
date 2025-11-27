import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const staticBackground = style({
  position: 'fixed',
  inset: 0,
  background: vars.color.background,
  opacity: 0,
  transition: 'opacity 0.6s ease-in-out',
  pointerEvents: 'none',
})

export const staticBackgroundActive = style({
  opacity: 1,
})

export const animatedBackground = style({
  position: 'fixed',
  inset: 0,
  opacity: 1,
  transition: 'opacity 0.6s ease-in-out',
})

export const animatedBackgroundHidden = style({
  opacity: 0,
  pointerEvents: 'none',
})
