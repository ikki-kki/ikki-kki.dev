import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[3],
})

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[2],
  paddingLeft: vars.space[4],
  paddingRight: vars.space[4],
  paddingTop: vars.space[2],
  paddingBottom: vars.space[2],
  fontSize: vars.fontSize.sm,
  borderRadius: vars.borderRadius.lg,
  transition: 'colors 200ms',
  border: 'none',
  cursor: 'pointer',
})

export const buttonVariants = styleVariants({
  copied: {
    backgroundColor: vars.color.green[50],
    color: vars.color.green[600],
  },
  default: {
    backgroundColor: vars.color.blue[500] + '20',
    color: vars.color.blue[600],
    ':hover': {
      backgroundColor: vars.color.blue[500] + '30',
    },
  },
})

export const icon = style({
  height: vars.space[4],
  width: vars.space[4],
})
