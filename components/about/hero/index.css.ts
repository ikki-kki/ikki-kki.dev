import { style } from '@vanilla-extract/css'
import { vars, media } from '@/lib/theme.css'

export const container = style({
  maxWidth: '720px',
  marginLeft: 'auto',
  marginRight: 'auto',
})

export const avatarRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[4],
  marginTop: vars.space[20],
  '@media': {
    [media.md]: {
      gap: vars.space[8],
      marginTop: vars.space[32],
    },
  },
})

export const heading = style({
  marginTop: vars.space[8],
  fontSize: vars.fontSize.xl,
  color: vars.color.green[900],
  '@media': {
    [media.md]: {
      marginTop: '4.5rem', // mt-18
      fontSize: vars.fontSize['2xl'],
    },
  },
})

export const description = style({
  marginTop: vars.space[6],
  maxWidth: '800px',
  fontSize: vars.fontSize.sm,
  color: vars.color.green[900],
  opacity: 0.8,
  '@media': {
    [media.md]: {
      marginTop: vars.space[10],
      fontSize: vars.fontSize.base,
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
  fontSize: vars.fontSize.sm,
  transitionDuration: '300ms',
  textDecoration: 'none',
  color: 'inherit',
  ':hover': {
    color: vars.color.green[900],
  },
  '@media': {
    [media.md]: {
      fontSize: vars.fontSize.base,
    },
  },
})

export const socialIcon = style({
  transition: 'all 300ms',
  opacity: 1,
  filter: 'grayscale(0)',
  '@media': {
    [media.md]: {
      filter: 'grayscale(1)',
      opacity: 0.5,
    },
  },
  selectors: {
    [`${socialLink}:hover &`]: {
      '@media': {
        [media.md]: {
          filter: 'grayscale(0)',
          opacity: 1,
        },
      },
    },
  },
})
