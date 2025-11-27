import { vars, media } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
  borderRadius: vars.borderRadius.full,
})

export const glow = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: vars.space[28],
  height: vars.space[28],
  borderRadius: vars.borderRadius.full,
  opacity: 1,
  zIndex: 0,
  filter: 'blur(40px)',
  transform: 'translate(-50%, -40%)',
  backgroundColor: vars.color.green[100],
})

export const preText = style({
  position: 'relative',
  zIndex: 10,
  fontSize: vars.fontSize.base,
  color: vars.color.green[900],
  '@media': {
    [media.md]: {
      fontSize: vars.fontSize.sm,
    },
  },
})
