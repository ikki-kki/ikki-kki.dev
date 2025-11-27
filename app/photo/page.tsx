import images from './images.json'
import GoogleMapUrl from '@/components/google-map-url'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { generateOgImageUrl } from '@/lib/utils'
import type { Metadata } from 'next'
import Image from 'next/image'
import * as styles from './page.css'

export const metadata: Metadata = {
  title: 'Photo | ikki-kki',
  description: 'Some memories I want to cherish.',
  openGraph: {
    title: 'Photo | ikki-kki',
    description: 'Some memories I want to cherish.',
    images: [{ url: generateOgImageUrl('Photo'), alt: 'ikki-kki.dev' }],
  },
}

const PhotoPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Photo</h1>
      <h2 className={styles.subtitle}>
        Some memories I want to cherish.
      </h2>

      <div className={styles.grid}>
        {[...images].reverse().map((image, index) => (
          <div key={index} className={styles.imageItem}>
            <AspectRatio ratio={3 / 4}>
              <Image
                src={image.url}
                alt={image.description}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className={styles.imageWrapper}
                priority={index < 8}
              />
            </AspectRatio>
            <div className={styles.imageInfo}>
              <p>{image.date}</p>
              {image.latitude && image.longitude && (
                <GoogleMapUrl
                  latitude={image.latitude}
                  longitude={image.longitude}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoPage
