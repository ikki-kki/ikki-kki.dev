import images from './images.json'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

const PhotoPage = () => {
  return (
    <div className="mt-32 md:mt-28 pb-20">
      <h1 className="text-2xl text-black">Photo</h1>
      <h2 className="mt-1 text-gray-500 text-sm">
        Some memories I want to cherish.
      </h2>

      <div className="mt-20 grid md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {images.map((image, index) => (
          <div key={index}>
            <AspectRatio ratio={3 / 4}>
              <Image
                src={image.url}
                alt={image.description}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover"
                priority={index < 8}
              />
            </AspectRatio>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <p>{image.date}</p>
              {image.latitude && image.longitude && (
                <p>
                  {image.latitude},{image.longitude}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoPage
