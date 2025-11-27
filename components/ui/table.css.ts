import { style, globalStyle } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const tableWrapper = style({
  position: 'relative',
  width: '100%',
  overflow: 'auto',
})

export const table = style({
  width: '100%',
  captionSide: 'bottom',
  fontSize: vars.fontSize.sm,
  borderCollapse: 'collapse',
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.borderRadius.lg,
})

export const thead = style({
  backgroundColor: 'rgba(249, 250, 251, 0.8)',
})

globalStyle(`${thead} tr`, {
  borderBottom: `1px solid ${vars.color.gray[200]}`,
})

export const tbody = style({})

globalStyle(`${tbody} tr:last-child`, {
  borderBottom: 0,
})

export const tr = style({
  borderBottom: `1px solid ${vars.color.gray[200]}`,
  transition: 'background-color 150ms',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(249, 250, 251, 0.5)',
    },
    '&[data-state="selected"]': {
      backgroundColor: 'rgba(249, 250, 251, 1)',
    },
  },
})

export const th = style({
  height: vars.space[12],
  paddingLeft: vars.space[4],
  paddingRight: vars.space[4],
  textAlign: 'left',
  verticalAlign: 'middle',
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.gray[900],
  selectors: {
    '&[align="center"]': {
      textAlign: 'center',
    },
    '&[align="right"]': {
      textAlign: 'right',
    },
  },
})

export const td = style({
  padding: vars.space[4],
  verticalAlign: 'middle',
  selectors: {
    '&[align="center"]': {
      textAlign: 'center',
    },
    '&[align="right"]': {
      textAlign: 'right',
    },
  },
})

export const caption = style({
  marginTop: vars.space[4],
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[500],
})
