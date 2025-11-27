import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { vars } from './theme.css'

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    xl: { '@media': 'screen and (min-width: 1280px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'inline-flex', 'block', 'inline', 'inline-block', 'grid', 'inline-grid'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    width: {
      full: '100%',
      auto: 'auto',
      ...vars.space,
    },
    height: {
      full: '100%',
      auto: 'auto',
      ...vars.space,
    },
    maxWidth: {
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      '720px': '720px',
    },
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    textAlign: ['left', 'center', 'right'],
    borderRadius: vars.borderRadius,
    position: ['relative', 'absolute', 'fixed', 'sticky'],
    top: vars.space,
    bottom: vars.space,
    left: vars.space,
    right: vars.space,
    zIndex: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      auto: 'auto',
    },
    overflow: ['hidden', 'auto', 'scroll', 'visible'],
    gridTemplateColumns: {
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },
    opacity: {
      0: '0',
      10: '0.1',
      20: '0.2',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      80: '0.8',
      90: '0.9',
      100: '1',
    },
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    hover: { selector: '&:hover' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.color.green,
    backgroundColor: {
      ...vars.color.green,
      ...vars.color.gray,
      white: vars.color.white,
      black: vars.color.black,
      background: vars.color.background,
    },
    borderColor: {
      ...vars.color.green,
      ...vars.color.gray,
      transparent: 'transparent',
    },
  },
})

const unresponsiveProperties = defineProperties({
  properties: {
    flexWrap: ['wrap', 'nowrap'],
    flexShrink: {
      0: '0',
      1: '1',
    },
    flexGrow: {
      0: '0',
      1: '1',
    },
    cursor: ['pointer', 'default', 'not-allowed'],
    pointerEvents: ['none', 'auto'],
    userSelect: ['none', 'text', 'auto'],
    objectFit: ['contain', 'cover', 'fill', 'none'],
    transform: {
      none: 'none',
    },
    transition: {
      none: 'none',
      all: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      colors: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    borderWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    borderStyle: ['solid', 'dashed', 'dotted', 'none'],
    fontFamily: {
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
    wordBreak: ['normal', 'break-all', 'keep-all'],
  },
})

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  unresponsiveProperties
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
