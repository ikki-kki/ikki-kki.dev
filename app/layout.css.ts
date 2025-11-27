import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const body = style({
  position: 'relative',
})

export const container = style({
  maxWidth: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.space[6],
  paddingRight: vars.space[6],
  position: 'relative',
  zIndex: 10,
})

export const backgroundLayer = style({
  zIndex: 0,
})
