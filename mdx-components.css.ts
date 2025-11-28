import { vars, media } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const articleWrapper = style({
  wordBreak: 'keep-all',
  maxWidth: vars.maxWidth.content,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: vars.space[16],
  marginBottom: vars.space[20],
  paddingLeft: 0,
  paddingRight: 0,
  height: '100vh',
  '@media': {
    [media.md]: {
      marginTop: vars.space[10],
    },
  },
})
