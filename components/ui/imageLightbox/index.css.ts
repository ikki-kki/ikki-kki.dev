import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const thumbnail = style({
  cursor: 'pointer',
  padding: 0,
  margin: 0,
  border: 'none',
  background: 'none',
  display: 'block',
  width: 'fit-content',
  maxWidth: '100%',
})

export const thumbnailImage = style({
  borderRadius: '0.75rem',
  display: 'block',
})

export const backdrop = style({
  position: 'fixed',
  inset: 0,
  zIndex: 9999,
  backgroundColor: `color-mix(in srgb, ${vars.color.greenGray[100]} 95%, transparent)`,
  cursor: 'pointer',
  pointerEvents: 'auto',
})

export const imageWrapper = style({
  position: 'fixed',
  inset: 0,
  zIndex: 10000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'default',
  pointerEvents: 'none',
})

export const imageContainer = style({
  position: 'relative',
  maxWidth: '90vw',
  maxHeight: '90vh',
  width: 'fit-content',
  height: 'fit-content',
  pointerEvents: 'auto',
})

export const lightboxImage = style({
  maxWidth: '90vw',
  maxHeight: '90vh',
  width: 'auto',
  height: 'auto',
  objectFit: 'contain',
  display: 'block',
  borderRadius: '0.75rem',
})
