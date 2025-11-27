import { style } from '@vanilla-extract/css'
import { vars, media } from '@/lib/theme.css'

export const container = style({
  marginTop: vars.space[16],
  paddingTop: vars.space[8],
  borderTop: `1px solid ${vars.color.gray[200]}`,
})

export const actionsSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[4],
  marginBottom: vars.space[12],
  '@media': {
    [media.sm]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
})
