import { style } from '@vanilla-extract/css'
import { vars, media } from '@/lib/theme.css'

export const footer = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  paddingTop: vars.space[8],
  paddingBottom: vars.space[4],
  gap: vars.space[4],
  fontSize: vars.fontSize.sm,
  '@media': {
    [media.md]: {
      fontSize: vars.fontSize.base,
    },
  },
})
