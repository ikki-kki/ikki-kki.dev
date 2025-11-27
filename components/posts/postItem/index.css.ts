import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const link = style({
  display: 'block',
  paddingTop: vars.space[6],
  paddingBottom: vars.space[6],
  borderBottom: `1px solid ${vars.color.green[100]}`,
  transition: 'background-color 150ms, color 150ms',
  textDecoration: 'none',
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: vars.space[4],
  marginBottom: vars.space[2],
})

export const title = style({
  color: vars.color.green[900],
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.lg,
  margin: 0,
})

export const date = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.gray[500],
  flexShrink: 0,
})

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[600],
  marginBottom: vars.space[3],
})

export const tagContainer = style({
  display: 'flex',
  gap: vars.space[2],
})

export const tag = style({
  fontSize: vars.fontSize.xs,
  backgroundColor: vars.color.green[100],
  color: vars.color.green[600],
  padding: `0 ${vars.space[2]}`,
  borderRadius: vars.borderRadius.base,
})
