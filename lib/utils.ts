import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export const generateOgImageUrl = (title: string) => {
  const baseUrl = 'https://ikki-kki.dev/api/og'
  const encodedTitle = encodeURIComponent(title)
  return `${baseUrl}?title=${encodedTitle}`
}
