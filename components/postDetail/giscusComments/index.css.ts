import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
})

export const inner = style({
  minHeight: '200px',
})

export const loading = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: vars.space[32],
  backgroundColor: 'rgba(249, 250, 251, 1)', // gray-50
  borderRadius: vars.borderRadius.lg,
})

export const loadingText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[500],
})
