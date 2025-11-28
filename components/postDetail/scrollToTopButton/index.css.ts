import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const scrollToTopButton = style({
  display: 'flex',
  gap: vars.space[1],
  fontSize: vars.fontSize.sm,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: vars.borderRadius.md,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  color: vars.color.green[800],

  ':hover': {
    color: vars.color.green[500],
  },
})
