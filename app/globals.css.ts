import { vars } from '@/lib/theme.css'
import { globalStyle } from '@vanilla-extract/css'

// Base styles
globalStyle('html', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('body', {
  backgroundColor: vars.color.background,
  color: vars.color.green[900],
  margin: 0,
  padding: 0,
  fontFamily:
    'var(--font-geist-mono), ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace',
  lineHeight: 1.7,
  letterSpacing: '-0.01em',
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
})

globalStyle('*', {
  boxSizing: 'border-box',
})

// Prose styles for blog content
globalStyle('.prose a', {
  color: vars.color.green[500],
  textDecorationColor: `color-mix(in srgb, ${vars.color.green[500]} 30%, transparent)`,
  fontWeight: 600,
})

globalStyle('.prose a:hover', {
  textDecorationColor: vars.color.green[500],
})

globalStyle('.prose code:not([class*="language-"])', {
  background: `color-mix(in srgb, ${vars.color.green[200]} 50%, transparent)`,
  color: vars.color.green[500],
  fontWeight: 600,
  padding: '0.2rem',
  borderRadius: '0.3rem',
})

globalStyle('.prose code::before, .prose code::after', {
  content: '""',
})

// Utility classes
globalStyle('.text-dark', {
  color: vars.color.green[900],
})

globalStyle('.scrollbar-hide', {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
})

globalStyle('.scrollbar-hide::-webkit-scrollbar', {
  display: 'none',
})

globalStyle('.line-clamp-2', {
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
})

// Prose container base styles
globalStyle('.prose', {
  maxWidth: '65ch',
  color: vars.color.green[900],
})

globalStyle('.prose :where(p):not(:where([class~="not-prose"] *))', {
  marginTop: '1.5em',
  marginBottom: '1.5em',
  lineHeight: 1.8,
  letterSpacing: '-0.01em',
})

globalStyle('.prose :where(h1):not(:where([class~="not-prose"] *))', {
  fontSize: '2.25em',
  marginTop: 0,
  marginBottom: '0.8888889em',
  lineHeight: 1.4,
  fontWeight: 800,
  letterSpacing: '-0.02em',
})

globalStyle('.prose :where(h2):not(:where([class~="not-prose"] *))', {
  fontSize: '1.5em',
  marginTop: '2em',
  marginBottom: '1em',
  lineHeight: 1.5,
  fontWeight: 700,
  letterSpacing: '-0.015em',
})

globalStyle('.prose :where(h3):not(:where([class~="not-prose"] *))', {
  fontSize: '1.25em',
  marginTop: '1.6em',
  marginBottom: '0.6em',
  lineHeight: 1.6,
  fontWeight: 600,
  letterSpacing: '-0.01em',
})

globalStyle('.prose :where(ul):not(:where([class~="not-prose"] *))', {
  marginTop: '1.25em',
  marginBottom: '1.25em',
  paddingLeft: '1.625em',
})

globalStyle('.prose :where(ol):not(:where([class~="not-prose"] *))', {
  marginTop: '1.25em',
  marginBottom: '1.25em',
  paddingLeft: '1.625em',
})

globalStyle('.prose :where(li):not(:where([class~="not-prose"] *))', {
  marginTop: '0.5em',
  marginBottom: '0.5em',
  lineHeight: 1.7,
})

globalStyle('.prose :where(pre):not(:where([class~="not-prose"] *))', {
  marginTop: '1.7142857em',
  marginBottom: '1.7142857em',
  borderRadius: '0.375rem',
  paddingTop: '0.8571429em',
  paddingRight: '1.1428571em',
  paddingBottom: '0.8571429em',
  paddingLeft: '1.1428571em',
  overflowX: 'auto',
})

globalStyle('.prose :where(blockquote):not(:where([class~="not-prose"] *))', {
  fontWeight: 500,
  backgroundColor: vars.color.green[50],
  borderLeft: `4px solid ${vars.color.green[200]}`,
  // borderRadius: vars.borderRadius.lg,
  quotes: '"\\201C""\\201D""\\2018""\\2019"',
  padding:'1em',
  margin: 0,
})

globalStyle('.prose :where(blockquote):not(:where([class~="not-prose"] *)) > p', {
  margin: 0,
})

globalStyle('.prose :where(img):not(:where([class~="not-prose"] *))', {
  marginTop: '2em',
  marginBottom: '2em',
  maxWidth: '100%',
  height: 'auto',
})

globalStyle('.prose :where(hr):not(:where([class~="not-prose"] *))', {
  borderColor: vars.color.gray[300],
  borderTopWidth: 1,
  marginTop: '3em',
  marginBottom: '3em',
})
