import { style } from '@vanilla-extract/css'
import { vars, media } from '@/lib/theme.css'

export const container = style({
  marginTop: vars.space[20],
  paddingBottom: vars.space[20],
  '@media': {
    [media.md]: {
      marginTop: vars.space[32],
    },
  },
})

export const content = style({
  maxWidth: '720px',
  marginLeft: 'auto',
  marginRight: 'auto',
})

export const title = style({
  fontSize: vars.fontSize['2xl'],
  color: vars.color.green[900],
})

export const postList = style({
  display: 'flex',
  flexDirection: 'column',
})
