import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  paddingTop: vars.space[8],
  paddingBottom: vars.space[4],
  gap: vars.space[4],
  fontSize: vars.fontSize.base,
  marginTop: 'auto',

  selectors: {
    '&[data-position-fixed="true"]': {
      position: 'fixed',
      bottom: 0,
      left: 0,
      marginTop: 0,
    },
  },
})
