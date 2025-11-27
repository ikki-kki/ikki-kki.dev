import { style } from '@vanilla-extract/css'
import { vars, media } from '@/lib/theme.css'

export const nav = style({
  marginTop: vars.space[12],
  maxWidth: '720px',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  gap: vars.space[6],
  '@media': {
    [media.md]: {
      gap: vars.space[12],
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
