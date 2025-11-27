import { style } from '@vanilla-extract/css'
import { vars, media } from '@/lib/theme.css'

export const articleWrapper = style({
  wordBreak: 'keep-all',
  maxWidth: '720px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: vars.space[20],
  marginBottom: vars.space[20],
  '@media': {
    [media.md]: {
      marginTop: vars.space[28],
      marginBottom: vars.space[28],
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})
