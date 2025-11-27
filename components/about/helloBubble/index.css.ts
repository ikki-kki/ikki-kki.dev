import { style } from '@vanilla-extract/css'
import { vars, media } from '@/lib/theme.css'

export const content = style({
  position: 'relative',
  zIndex: 10,
  fontSize: vars.fontSize.sm,
  whiteSpace: 'pre',
  color: vars.color.green[900],
  '@media': {
    [media.md]: {
      fontSize: vars.fontSize.base,
    },
  },
})

export const helloText = style({
  display: 'inline',
  fontSize: vars.fontSize['2xl'],
  '@media': {
    [media.md]: {
      fontSize: vars.fontSize['3xl'],
    },
  },
})
