import { style } from '@vanilla-extract/css'
import { vars, media } from '@/lib/theme.css'

export const container = style({
  marginTop: vars.space[20],
  paddingBottom: vars.space[20],
  '@media': {
    [media.md]: {
      marginTop: vars.space[32],
    },
  },
})

export const title = style({
  fontSize: vars.fontSize['2xl'],
  color: vars.color.green[900],
})

export const subtitle = style({
  marginTop: vars.space[1],
  color: vars.color.gray[500],
  fontSize: vars.fontSize.sm,
})

export const grid = style({
  marginTop: vars.space[12],
  display: 'grid',
  gap: vars.space[16],
  columnGap: vars.space[8],
  '@media': {
    [media.md]: {
      marginTop: vars.space[20],
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [media.xl]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
})

export const imageItem = style({
})

export const imageWrapper = style({
  objectFit: 'cover',
})

export const imageInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: vars.fontSize.xs,
  color: vars.color.gray[500],
  marginTop: vars.space[1],
})
