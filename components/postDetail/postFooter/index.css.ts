import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  marginTop: vars.space[16],
  paddingTop: vars.space[8],
  borderTop: `1px solid ${vars.color.gray[200]}`,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[12],
})

export const topSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[4],
  marginBottom: vars.space[8],
})

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: vars.space[8],
})
