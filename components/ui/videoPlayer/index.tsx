import * as styles from './index.css'

interface VideoPlayerProps {
  src: string
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <video
      muted
      autoPlay
      controls
      loop
      className={styles.video}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default VideoPlayer
