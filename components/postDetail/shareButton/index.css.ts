import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const shareButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[2],
  fontSize: vars.fontSize.sm,
  fontWeight: '500',
  color: vars.color.green[500],
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: vars.borderRadius.md,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  alignSelf: 'flex-start',

  ':hover': {
    color: vars.color.green[700],
  },
})
