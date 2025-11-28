import { vars, media } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const nav = style({
  marginTop: vars.space[10],
  maxWidth: vars.maxWidth.content,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  gap: vars.space[12],
  '@media': {
    [media.md]: {
      gap: vars.space[6],
    },
  },
})

export const link = style({
  textDecoration: 'none',
  color: 'inherit',
  transition: 'color 150ms ease',
})

export const activeLink = style({
  color: vars.color.green[900],
})
