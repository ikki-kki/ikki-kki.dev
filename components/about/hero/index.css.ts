import { vars, media } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  maxWidth: vars.maxWidth.content,
  marginLeft: 'auto',
  marginRight: 'auto',
})

export const avatarRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[8],
  marginTop: vars.space[16],
  '@media': {
    [media.md]: {
      marginTop: vars.space[10],
      fontSize: vars.fontSize.xl,
    },
  },
})

export const heading = style({
  fontSize: vars.fontSize['2xl'],
  color: vars.color.green[900],
  '@media': {
    [media.md]: {
      marginTop: vars.space[8],
      fontSize: vars.fontSize.xl,
    },
  },
})

export const description = style({
  marginTop: vars.space[10],
  maxWidth: '800px',
  fontSize: vars.fontSize.base,
  color: vars.color.green[900],
  opacity: 0.8,
  '@media': {
    [media.md]: {
      marginTop: vars.space[6],
      fontSize: vars.fontSize.sm,
    },
  },
})

export const socialLinks = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[8],
  marginTop: vars.space[8],
})

export const socialLink = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[2],
  fontSize: vars.fontSize.base,
  transitionDuration: '300ms',
  textDecoration: 'none',
  color: 'inherit',
  ':hover': {
    color: vars.color.green[900],
  },
  '@media': {
    [media.md]: {
      fontSize: vars.fontSize.sm,
    },
  },
})

export const socialIcon = style({
  transition: 'all 300ms',
  filter: 'grayscale(1)',
  opacity: 0.5,
  '@media': {
    [media.md]: {
      opacity: 1,
      filter: 'grayscale(0)',
    },
  },
  selectors: {
    [`${socialLink}:hover &`]: {
      '@media': {
        [media.md]: {
          filter: 'grayscale(1)',
          opacity: 0.5,
        },
      },
    },
  },
})
