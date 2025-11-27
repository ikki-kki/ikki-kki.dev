import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: vars.space[6],
  gap: vars.space[3],
})

export const date = style({
  color: vars.color.gray[600],
})

export const title = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
})
