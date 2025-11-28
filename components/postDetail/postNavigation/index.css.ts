import { vars, media } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const navigationButtons = style({
  display: 'flex',
  gap: vars.space[4],
  '@media': {
    [media.sm]: {
      flexDirection: 'column',
      gap: vars.space[3],
    },
  },
})

export const navButton = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[2],
  padding: vars.space[4],
  backgroundColor: 'transparent',
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.borderRadius.md,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textDecoration: 'none',
  color: vars.color.gray[900],
  minWidth: 0,

  ':hover': {
    backgroundColor: vars.color.green[50],
    borderColor: vars.color.green[300],
    color: vars.color.green[800],
  },
})

export const navButtonDisabled = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[2],
  padding: vars.space[4],
  backgroundColor: 'transparent',
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.borderRadius.md,
  color: vars.color.gray[400],
  opacity: 0.6,
  minWidth: 0,
})

export const navButtonText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[1],
  flex: 1,
  minWidth: 0,
})

export const navLabel = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.gray[500],
})

export const navTitle = style({
  fontSize: vars.fontSize.sm,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})
