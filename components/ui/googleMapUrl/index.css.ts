import { style } from '@vanilla-extract/css'

export const link = style({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
})
