import { vars, media } from '@/lib/theme.css'
import { style, styleVariants, globalStyle } from '@vanilla-extract/css'

export const sidebar = style({
  position: 'fixed',
  left: 'calc(50% + 370px)',
  top: vars.space[34],
  width: '16rem',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  '@media': {
    [media.xl]: {
      display: 'none',
    },
  },
})

export const nav = style({
  paddingLeft: vars.space[4],
  maxHeight: 'calc(100vh - 20rem)',
})

globalStyle(`${nav} ul`, {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  borderLeft: `1px solid ${vars.color.green[100]}`,
  paddingLeft: vars.space[4],
})

export const tocItem = style({})

globalStyle(`${nav} li`, {
  margin: 0,
  padding: 0,
  position: 'relative',
  lineHeight: 1.2,
})

export const tocButton = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  textAlign: 'left',
  fontSize: vars.fontSize.xs,
  paddingTop: vars.space[1],
  paddingBottom: vars.space[1],
  transition: 'all 200ms',
  textDecoration: 'none',
  ':hover': {
    color: vars.color.green[700],
  },
})

export const tocButtonVariants = styleVariants({
  active: {
    color: vars.color.green[700],
  },
  inactive: {
    color: vars.color.green[400],
  },
})
