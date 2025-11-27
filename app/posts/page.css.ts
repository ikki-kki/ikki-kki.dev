import { vars, media } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  marginTop: vars.space[16],
  paddingBottom: vars.space[6],
})

export const content = style({
  maxWidth: vars.maxWidth.content,
  marginLeft: 'auto',
  marginRight: 'auto',
})

export const title = style({
  fontSize: vars.fontSize['3xl'],
  color: vars.color.green[900],

  '@media': {
    [media.md]: {
      fontSize: vars.fontSize['2xl'],
    },
  },
})

export const postList = style({
  display: 'flex',
  flexDirection: 'column',
})
