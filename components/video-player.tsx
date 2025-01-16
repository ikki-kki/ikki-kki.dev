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
      style={{
        borderRadius: '8px',
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default VideoPlayer
