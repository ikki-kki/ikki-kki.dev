import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    background: '#fdfff9ff',
    green: {
      50: '#f0f9e8',
      100: '#e5f0b0',
      200: '#cbdd62',
      300: '#aedd66',
      400: '#8bb455',
      500: '#498428',
      600: '#336429',
      700: '#2a5222',
      800: '#1f3c1a',
      900: '#032425',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    blue: {
      500: '#3b82f6',
      600: '#2563eb',
    },
    orange: {
      500: '#f97316',
    },
    white: '#ffffff',
    black: '#000000',
  },
  space: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    28: '7rem', // 112px
    32: '8rem', // 128px
    40: '10rem', // 160px
    48: '12rem', // 192px
    56: '14rem', // 224px
    64: '16rem', // 256px
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  borderRadius: {
    none: '0',
    sm: 'calc(0.5rem - 4px)',
    base: '0.25rem',
    md: 'calc(0.5rem - 2px)',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  maxWidth: {
    content: '720px',
  },
})

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const media = {
  sm: `screen and (max-width: ${breakpoints.sm})`,
  md: `screen and (max-width: ${breakpoints.md})`,
  lg: `screen and (max-width: ${breakpoints.lg})`,
  xl: `screen and (max-width: ${breakpoints.xl})`,
  '2xl': `screen and (max-width: ${breakpoints['2xl']})`,
} as const
