import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const loading = style({
  fontSize: vars.fontSize.xs,
})

export const clockContainer = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: vars.fontSize.xs,
  gap: vars.space[2],
})

export const label = style({
  fontWeight: vars.fontWeight.semibold,
})
