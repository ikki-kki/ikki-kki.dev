import { vars, media } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const content = style({
  position: 'relative',
  zIndex: 10,
  fontSize: vars.fontSize.base,
  whiteSpace: 'pre',
  color: vars.color.green[900],
  '@media': {
    [media.md]: {
      fontSize: vars.fontSize.xs,
    },
  },
})

export const helloText = style({
  display: 'inline',
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.normal,
  '@media': {
    [media.md]: {
      fontSize: vars.fontSize['xl'],
    },
  },
})
