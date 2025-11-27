import { vars } from '@/lib/theme.css'
import { style, keyframes, globalStyle } from '@vanilla-extract/css'

// Keyframe animations
const moveInCircle = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '50%': {
    transform: 'rotate(180deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const moveVertical = keyframes({
  '0%': {
    transform: 'translateY(-50%)',
  },
  '50%': {
    transform: 'translateY(50%)',
  },
  '100%': {
    transform: 'translateY(-50%)',
  },
})

const moveHorizontal = keyframes({
  '0%': {
    transform: 'translateX(-50%) translateY(-10%)',
  },
  '50%': {
    transform: 'translateX(50%) translateY(10%)',
  },
  '100%': {
    transform: 'translateX(-50%) translateY(-10%)',
  },
})

export const container = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})

export const background = style({
  width: '100%',
  height: '100%',
  backgroundColor: vars.color.background,
})

export const svg = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: 0,
  height: 0,
})

export const filterContainer = style({
  width: '100%',
  height: '100%',
  filter: 'url(#goo) blur(40px)',
})

const gradientBase = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundRepeat: 'no-repeat',
  mixBlendMode: 'hard-light',
})

export const g1 = style([
  gradientBase,
  {
    opacity: 1,
    backgroundImage:
      'radial-gradient(circle at center, #f0f9e8cc 0, #f0f9e800 50%)',
    animation: `${moveVertical} 30s ease infinite`,
    transformOrigin: '50% 50%',
  },
])

// Global style to override animation transform origin
globalStyle(`.${g1}`, {
  '@media': {
    'screen and (min-width: 1)': {
      animationName: moveVertical,
    },
  },
})

export const g2 = style([
  gradientBase,
  {
    opacity: 1,
    backgroundImage:
      'radial-gradient(circle at center, #e5f0b0cc 0, #e5f0b000 50%)',
    animation: `${moveInCircle} 20s reverse infinite`,
    transformOrigin: 'calc(50% - 400px) calc(50% + 100px)',
  },
])

export const g3 = style([
  gradientBase,
  {
    opacity: 1,
    backgroundImage:
      'radial-gradient(circle at center, #cbdd62cc 0, #cbdd6200 50%)',
    transform: 'translate(-50%, -50%) translateY(8rem) translateX(-16rem)',
    animation: `${moveVertical} 40s ease infinite`,
    transformOrigin: 'calc(50% - 100px) calc(50% - 50px)',
  },
])

export const g4 = style([
  gradientBase,
  {
    opacity: 0.7,
    backgroundImage:
      'radial-gradient(circle at center, #8bb455cc 0, #8bb45500 50%)',
    animation: `${moveHorizontal} 40s ease infinite`,
    transformOrigin: '50% 50%',
  },
])

export const g5 = style([
  gradientBase,
  {
    opacity: 1,
    backgroundImage:
      'radial-gradient(circle at center, #498428cc 0, #49842800 50%)',
    transform: 'translate(-50%, -50%) scale(1.5)',
    animation: `${moveInCircle} 20s ease infinite`,
    transformOrigin: 'calc(50% - 800px) calc(50% + 200px)',
  },
])

export const interactive = style({
  position: 'absolute',
  opacity: 0.7,
  width: '100%',
  height: '100%',
  top: '-50%',
  left: '-50%',
  backgroundImage:
    'radial-gradient(circle at center, #aedd66cc 0, #aedd6600 50%)',
  backgroundRepeat: 'no-repeat',
  mixBlendMode: 'hard-light',
})
