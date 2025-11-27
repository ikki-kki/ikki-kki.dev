import { style } from '@vanilla-extract/css'
import { vars, media } from '@/lib/theme.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[3],
})

export const buttonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[2],
})

export const link = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[2],
  paddingLeft: vars.space[3],
  paddingRight: vars.space[3],
  paddingTop: vars.space[2],
  paddingBottom: vars.space[2],
  fontSize: vars.fontSize.sm,
  backgroundColor: vars.color.orange[500] + '20',
  color: vars.color.orange[500],
  borderRadius: vars.borderRadius.lg,
  transition: 'colors 200ms',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: vars.color.orange[500] + '30',
  },
})

export const icon = style({
  height: vars.space[4],
  width: vars.space[4],
})

export const linkText = style({
  display: 'none',
  '@media': {
    [media.sm]: {
      display: 'inline',
    },
  },
})
