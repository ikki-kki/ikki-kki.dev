import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: vars.space[6],
  gap: vars.space[3],
})

export const backButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space[2],
  padding: `${vars.space[2]} ${vars.space[3]}`,
  fontSize: vars.fontSize.sm,
  backgroundColor: 'transparent',
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.borderRadius.md,
  cursor: 'pointer',
  textDecoration: 'none',
  marginBottom: vars.space[4],
  alignSelf: 'flex-start',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: vars.color.green[50],
    borderColor: vars.color.green[300],
    color: vars.color.green[800],
  },
})

export const backIcon = style({
  width: '16px',
  height: '16px',
})

export const date = style({
  color: vars.color.gray[600],
  fontSize: vars.fontSize['sm'],
})

export const title = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
})
