import { vars, media } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  marginTop: vars.space[16],
  paddingBottom: vars.space[16],
  paddingLeft: vars.space[4],
  paddingRight: vars.space[4],
  fontFamily: '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
})

export const content = style({
  maxWidth: vars.maxWidth.content,
  marginLeft: 'auto',
  marginRight: 'auto',
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: vars.space[12],
  gap: vars.space[8],
  
  '@media': {
    [media.md]: {
      flexDirection: 'column',
      gap: vars.space[6],
    },
  },
})

export const headerLeft = style({
  flex: 1,
})

export const headerTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.green[900],
  lineHeight: 1.3,
  margin: 0,
  
  '@media': {
    [media.md]: {
      fontSize: vars.fontSize['4xl'],
    },
  },
})

export const headerRight = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
  fontSize: vars.fontSize.base,
  color: vars.color.green[500],
})

export const contactItem = style({
  display: 'flex',
  gap: vars.space[2],
})

export const contactLabel = style({
  minWidth: '60px',
  fontWeight: vars.fontWeight.medium,
})

export const contactLink = style({
  color: vars.color.green[500],
  textDecoration: 'none',
  ':hover': {
    color: vars.color.green[600],
    textDecoration: 'underline',
  },
})

export const introduction = style({
  marginBottom: vars.space[12],
  fontSize: vars.fontSize.lg,
  lineHeight: 1.7,
  color: vars.color.greenGray[800],
})

export const section = style({
  marginBottom: vars.space[12],
})

export const sectionHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginBottom: vars.space[6],
  paddingBottom: vars.space[2],
  borderBottom: `2px solid ${vars.color.greenGray[900]}`,
})

export const sectionTitle = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.greenGray[900],
})

export const sectionDuration = style({
  fontSize: vars.fontSize.base,
  color: vars.color.greenGray[600],
})

export const careerItem = style({
  marginBottom: vars.space[8],
})

export const careerHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: vars.space[2],
  
  '@media': {
    [media.md]: {
      flexDirection: 'column',
      gap: vars.space[1],
    },
  },
})

export const careerTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.greenGray[900],  
  marginTop:0,
  marginBottom:vars.space[1],
})

export const careerPeriod = style({
  fontSize: vars.fontSize.base,
  color: vars.color.greenGray[400],
  whiteSpace: 'nowrap',
})

export const careerSubtitle = style({
  fontSize: vars.fontSize.base,
  color: vars.color.greenGray[600],
  marginBottom: vars.space[3],
  marginTop: 0,
})

export const careerList = style({
  paddingLeft: vars.space[5],
  margin: 0,
})

export const careerListItem = style({
  fontSize: vars.fontSize.base,
  lineHeight: 1.6,
  color: vars.color.greenGray[700],
  marginBottom: vars.space[1],
})

export const educationItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginBottom: vars.space[3],
  gap: vars.space[4],
  
  '@media': {
    [media.md]: {
      flexDirection: 'column',
      gap: vars.space[1],
    },
  },
})

export const educationName = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.greenGray[900],
})

export const educationDetail = style({
  fontSize: vars.fontSize.base,
  color: vars.color.greenGray[600],
  marginLeft: vars.space[2],
})

export const educationPeriod = style({
  fontSize: vars.fontSize.base,
  color: vars.color.greenGray[400],
  whiteSpace: 'nowrap',
})

// Skills
export const skillsGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: vars.space[4],
  
  '@media': {
    [media.md]: {
      gridTemplateColumns: '1fr',
    },
  },
})

export const skillsList = style({
  paddingLeft: vars.space[5],
  margin: 0,
})

export const skillItem = style({
  fontSize: vars.fontSize.base,
  lineHeight: 1.8,
  color: vars.color.greenGray[700],
})

// Work Experience
export const workExperienceItem = style({
  marginBottom: vars.space[10],
})

export const workExperienceTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.greenGray[900],
  marginBottom: vars.space[4],
})

export const workExperienceCompany = style({
  fontSize: vars.fontSize.base,
  color: vars.color.greenGray[400],
  marginLeft: vars.space[2],
})

export const workExperienceSection = style({
  marginBottom: vars.space[4],
})

export const workExperienceSectionTitle = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.greenGray[900],
  marginBottom: vars.space[2],
  textTransform: 'uppercase',
})

export const workExperienceList = style({
  paddingLeft: vars.space[5],
  margin: 0,
})

export const workExperienceListItem = style({
  fontSize: vars.fontSize.base,
  lineHeight: 1.7,
  color: vars.color.greenGray[700],
  marginBottom: vars.space[1],
})

export const highlight = style({
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.greenGray[900],
})

// Tech Talks & Writing
export const talkItem = style({
  marginBottom: vars.space[6],
})

export const talkTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.greenGray[900],
  marginTop: 0,
  marginBottom: vars.space[2],
})

export const talkDescription = style({
  fontSize: vars.fontSize.base,
  lineHeight: 1.7,
  color: vars.color.greenGray[700],
  marginBottom: vars.space[2],
  marginTop: 0,
})

export const talkLinks = style({
  display: 'flex',
  gap: vars.space[2],
  alignItems: 'center',
})

export const talkLinkDivider = style({
  color: vars.color.greenGray[400],
})
